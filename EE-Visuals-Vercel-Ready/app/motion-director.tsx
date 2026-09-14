"use client";

import { useEffect } from "react";

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

export default function MotionDirector() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const revealSelectors = [
      ".ee-section-head",
      ".ee-project",
      ".ee-profile-image",
      ".ee-profile-copy",
      ".ee-service-list article",
      ".ee-contact > div",
      ".ee-contact-links",
      ".ee-footer > *",
      ".section-intro",
      ".project-card",
      ".journal-card",
      ".journal-follow",
      ".showreel__copy",
      ".showreel__play",
      ".service-row",
      ".about__portrait",
      ".about__copy",
      ".process-list li",
      ".testimonials-placeholder > *",
      ".contact__intro",
      ".contact-form",
      ".case-study-hero__topline",
      ".case-study-hero h1 > span",
      ".case-study-hero__summary > *",
      ".case-study-brief > *",
      ".case-study-portrait-block > *",
      ".case-study-detail-grid > *",
      ".case-study-method__heading > *",
      ".case-study-method__grid article",
      ".case-study-output > *",
      ".case-study-cta > *",
      ".case-study-footer > *",
    ].join(",");

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    );

    const groupedSelectors = [
      ".ee-project-grid",
      ".ee-service-list",
      ".project-grid",
      ".journal-grid",
      ".service-list",
      ".process-list",
      ".case-study-method__grid",
      ".case-study-detail-grid",
    ];

    groupedSelectors.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((group) => {
        Array.from(group.children).forEach((child, index) => {
          if (child instanceof HTMLElement) {
            child.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 75}ms`);
          }
        });
      });
    });

    revealElements.forEach((element) => {
      element.dataset.reveal = "";
    });

    root.classList.add("motion-enabled");

    let observer: IntersectionObserver | null = null;
    if (!reducedMotion.matches) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -9% 0px", threshold: 0.08 },
      );
      revealElements.forEach((element) => observer?.observe(element));
    } else {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    }

    const mediaElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".ee-project-media, .ee-profile-image, .project-card figure, .journal-card figure, .showreel__button, .about__portrait, .case-study-image",
      ),
    );
    mediaElements.forEach((element) => element.classList.add("motion-media"));

    const progressSections = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".ee-projects, .ee-profile, .ee-services, .ee-contact, .work-section, .instagram-journal, .services, .about, .process, .contact, .case-study-brief, .case-study-method, .case-study-output",
      ),
    );

    let frame = 0;
    const updateMotion = () => {
      frame = 0;
      const viewportHeight = Math.max(window.innerHeight, 1);
      const documentHeight = Math.max(
        document.documentElement.scrollHeight - viewportHeight,
        1,
      );
      const pageProgress = clamp(window.scrollY / documentHeight);
      root.style.setProperty("--page-progress", pageProgress.toFixed(4));
      document.body.classList.toggle("has-scrolled", window.scrollY > 48);

      if (reducedMotion.matches) return;

      mediaElements.forEach((element) => {
        const bounds = element.getBoundingClientRect();
        if (bounds.bottom < -viewportHeight || bounds.top > viewportHeight * 2) return;
        const progress = clamp(
          (viewportHeight - bounds.top) / (viewportHeight + bounds.height),
        );
        element.style.setProperty("--motion-progress", progress.toFixed(4));
        element.style.setProperty(
          "--motion-y",
          `${((progress - 0.5) * -34).toFixed(2)}px`,
        );
        element.style.setProperty(
          "--motion-y-soft",
          `${((progress - 0.5) * -12).toFixed(2)}px`,
        );
        element.style.setProperty(
          "--portrait-rotate",
          `${((progress - 0.5) * 7).toFixed(2)}deg`,
        );
      });

      progressSections.forEach((section) => {
        const bounds = section.getBoundingClientRect();
        const distance = Math.max(1, bounds.height + viewportHeight);
        const progress = clamp((viewportHeight - bounds.top) / distance);
        section.style.setProperty("--section-progress", progress.toFixed(4));
      });
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      root.classList.remove("motion-enabled");
      root.style.removeProperty("--page-progress");
      document.body.classList.remove("has-scrolled");
    };
  }, []);

  return (
    <div className="page-progress" aria-hidden="true">
      <span />
    </div>
  );
}
