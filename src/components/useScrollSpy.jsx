import { useState, useEffect } from "react";

export default function useScrollSpy(sections) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.replace("#", ""));
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.replace("#", ""));
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  return activeId;
}
