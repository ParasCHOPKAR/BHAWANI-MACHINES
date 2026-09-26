"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Reading / Scroll Progress Bar
    const progressBar = document.getElementById("scroll-progress-bar");
    const updateProgress = () => {
      if (!progressBar) return;
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0) {
        const scrolled = (window.scrollY / scrollTotal) * 100;
        progressBar.style.width = `${Math.min(100, Math.max(0, scrolled))}%`;
      }
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    // 2. Intersection Observer for Scroll Reveal Animations
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.08,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const targetSelectors = [
      ".reveal",
      ".reveal-up",
      ".reveal-left",
      ".reveal-right",
      ".reveal-scale",
      ".section-header",
      ".product-card",
      ".category-item",
      ".feature-block",
      ".stat-item",
      ".custom-machine-cta",
      ".gallery-cs-card",
      ".preview-card",
      ".timeline-item",
      ".abt-stat-card",
      ".product-header-section",
      ".spec-table-container",
      ".contact-card",
      ".about-mission-card",
      ".about-story-text",
      ".about-image-wrapper"
    ].join(", ");

    const elements = document.querySelectorAll(targetSelectors);
    elements.forEach((el) => {
      if (!el.classList.contains("revealed")) {
        const parent = el.parentElement;
        if (parent && (
          parent.classList.contains("categories-grid-new") || 
          parent.classList.contains("best-sellers-grid") || 
          parent.classList.contains("features-grid-new") || 
          parent.classList.contains("stats-grid") ||
          parent.classList.contains("gallery-preview-grid")
        )) {
          const childIndex = Array.from(parent.children).indexOf(el);
          el.style.transitionDelay = `${childIndex * 120}ms`;
        }
        observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener("scroll", updateProgress);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div 
      id="scroll-progress-bar" 
      className="scroll-progress-bar" 
      aria-hidden="true" 
    />
  );
}
