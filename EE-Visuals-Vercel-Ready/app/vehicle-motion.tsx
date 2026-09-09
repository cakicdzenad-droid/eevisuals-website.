"use client";

import { useEffect, useMemo, useRef } from "react";

type MotionVariant = "orbit" | "horizon" | "redline";

type MotionFrame = {
  src: string;
  alt: string;
  position?: string;
};

type VehicleMotionProps = {
  variant: MotionVariant;
  eyebrow: string;
  title: string;
  description: string;
  cue: string;
  frames: MotionFrame[];
};

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const smoothstep = (value: number) => value * value * (3 - 2 * value);

export default function VehicleMotion({
  variant,
  eyebrow,
  title,
  description,
  cue,
  frames,
}: VehicleMotionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  const displayFrames = useMemo(() => {
    if (variant === "orbit" && frames.length >= 3) {
      return [frames[0], frames[1], frames[2], frames[1], frames[0]];
    }
    return frames;
  }, [frames, variant]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const frameElements = Array.from(
      section.querySelectorAll<HTMLElement>("[data-motion-frame]"),
    );
    let animationFrame = 0;

    const update = () => {
      animationFrame = 0;
      const bounds = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const rawProgress = reducedMotion.matches ? 0 : clamp(-bounds.top / distance);
      const progress = smoothstep(rawProgress);

      section.style.setProperty("--scene-progress", progress.toFixed(4));
      section.style.setProperty("--scene-angle", `${(progress * 360).toFixed(2)}deg`);
      section.style.setProperty("--scene-line", `${(progress * 100).toFixed(2)}%`);

      if (counterRef.current) {
        if (variant === "orbit") {
          counterRef.current.textContent = String(Math.round(progress * 360)).padStart(3, "0");
        } else if (variant === "horizon") {
          counterRef.current.textContent = String(
            Math.min(displayFrames.length, Math.floor(progress * displayFrames.length) + 1),
          ).padStart(2, "0");
        } else {
          counterRef.current.textContent = String(Math.round(progress * 100)).padStart(3, "0");
        }
      }

      if (variant === "redline") {
        frameElements.forEach((frame, index) => {
          frame.style.setProperty("--frame-opacity", index === 0 ? "1" : "1");
          frame.style.setProperty("--frame-scale", (1.055 - progress * 0.055).toFixed(4));
          if (index === 1) {
            frame.style.setProperty("--frame-clip", `${(1 - progress) * 100}%`);
          }
        });
        return;
      }

      const position = progress * Math.max(1, displayFrames.length - 1);
      const activeIndex = Math.min(displayFrames.length - 2, Math.floor(position));
      const localProgress = position - activeIndex;

      frameElements.forEach((frame, index) => {
        let opacity = 0;
        if (index === activeIndex) opacity = 1 - localProgress;
        if (index === activeIndex + 1) opacity = localProgress;
        if (progress >= 1 && index === displayFrames.length - 1) opacity = 1;

        const distanceFromPlayhead = index - position;
        frame.style.setProperty("--frame-opacity", opacity.toFixed(4));
        frame.style.setProperty(
          "--frame-scale",
          (1.065 - Math.min(Math.abs(distanceFromPlayhead), 1) * 0.025 - progress * 0.02).toFixed(4),
        );
        frame.style.setProperty("--frame-x", `${distanceFromPlayhead * 2.4}%`);
        frame.style.setProperty("--frame-turn", `${distanceFromPlayhead * 2.1}deg`);
      });
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
    };
  }, [displayFrames.length, variant]);

  return (
    <section
      className={`vehicle-motion vehicle-motion--${variant}`}
      ref={sectionRef}
      aria-label={title}
    >
      <div className="vehicle-motion__sticky">
        <div className="vehicle-motion__frames" aria-hidden="true">
          {displayFrames.map((frame, index) => (
            <div
              className="vehicle-motion__frame"
              data-motion-frame
              key={`${frame.src}-${index}`}
            >
              <img
                src={frame.src}
                alt=""
                width="1536"
                height="1024"
                style={{ objectPosition: frame.position ?? "center" }}
              />
            </div>
          ))}
        </div>

        <div className="vehicle-motion__shade" aria-hidden="true" />
        <div className="vehicle-motion__grid" aria-hidden="true" />
        {variant === "redline" && (
          <div className="vehicle-motion__redline" aria-hidden="true" />
        )}
        <div className="vehicle-motion__content">
          <p>{eyebrow}</p>
          <h2>{title}</h2>
          <span>{description}</span>
        </div>

        <div className="vehicle-motion__dial" aria-hidden="true">
          <i />
          <div>
            <span ref={counterRef}>000</span>
            <small>
              {variant === "orbit" ? "°" : variant === "horizon" ? ` / 0${frames.length}` : "%"}
            </small>
          </div>
        </div>

        <div className="vehicle-motion__cue" aria-hidden="true">
          <span>{cue}</span>
          <i />
        </div>
      </div>
    </section>
  );
}
