"use client";

import { useEffect, useState } from "react";

const SHOW_OFFSET = 245;

export default function ScrollTop() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsOpen(window.scrollY >= SHOW_OFFSET);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`scroll-top scroll-to-target${isOpen ? " open" : ""}`}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <i className="fas fa-angle-up"></i>
    </button>
  );
}
