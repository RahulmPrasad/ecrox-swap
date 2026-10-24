"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated collapse that reproduces Bootstrap's collapse behaviour
 * (collapse -> collapsing -> collapse show) without Bootstrap's JS.
 * React renders only the initial classes; transitions are applied to the
 * DOM node directly, the same way Bootstrap does it.
 */
export default function Collapse({ isOpen, className = "", children, ...rest }) {
  const ref = useRef(null);
  const prevIsOpen = useRef(isOpen);
  const [initialOpen] = useState(isOpen);

  useEffect(() => {
    if (prevIsOpen.current === isOpen) return;
    prevIsOpen.current = isOpen;

    const el = ref.current;
    if (isOpen) {
      el.classList.remove("collapse");
      el.classList.add("collapsing");
      el.style.height = `${el.scrollHeight}px`;
    } else {
      el.style.height = `${el.getBoundingClientRect().height}px`;
      void el.offsetHeight; // force reflow so the height transition starts from the current size
      el.classList.add("collapsing");
      el.classList.remove("collapse", "show");
      el.style.height = "";
    }

    const handleTransitionEnd = (event) => {
      if (event.target !== el || event.propertyName !== "height") return;
      el.classList.remove("collapsing");
      el.classList.add("collapse");
      el.classList.toggle("show", isOpen);
      el.style.height = "";
    };
    el.addEventListener("transitionend", handleTransitionEnd);
    return () => el.removeEventListener("transitionend", handleTransitionEnd);
  }, [isOpen]);

  return (
    <div ref={ref} className={`${className} collapse${initialOpen ? " show" : ""}`} {...rest}>
      {children}
    </div>
  );
}
