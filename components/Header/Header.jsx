"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { XIcon } from "@/components/Icons/Icons";
import "./Header.css";

const STICKY_OFFSET = 245;

const NAV_ITEMS = {
  home: [
    { label: "Home", href: "/" },
    { label: "About", href: "#feature" },
    { label: "RoadMap", href: "#roadMap" },
    { label: "Founders", href: "#founders" },
    { label: "Contact", href: "/contact" },
  ],
  inner: [
    { label: "Home", href: "/" },
    { label: "Feature", href: "/#feature" },
    { label: "RoadMap", href: "/#roadMap" },
    { label: "Founders", href: "/#founders" },
    { label: "Contact", href: "/contact" },
  ],
};

const isSectionLink = (href) => href.startsWith("#");

// Distance from the top of the document (offsetTop is relative to the nearest
// positioned ancestor, which is wrong for sections inside positioned wrappers)
const pageTop = (element) => element.getBoundingClientRect().top + window.scrollY;

function scrollToSection(event, href) {
  if (href === "/") {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (!isSectionLink(href)) return;
  const target = document.querySelector(href);
  if (!target) return;
  event.preventDefault();
  window.scrollTo({ top: pageTop(target) - 80, behavior: "smooth" });
}

function Navigation({ items, activeLabel, onNavigate }) {
  return (
    <ul className="navigation">
      {items.map((item) => (
        <li key={item.label} className={item.label === activeLabel ? "active" : undefined}>
          <Link href={item.href} onClick={onNavigate ? (e) => onNavigate(e, item.href) : undefined}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * @param {{ variant?: "home" | "inner", activeLabel?: string }} props
 * "home" renders the one-page header (layout1) with scroll-spy;
 * "inner" renders the inner-page header with the off-canvas info panel.
 */
export default function Header({ variant = "home", activeLabel: fixedActive }) {
  const isHome = variant === "home";
  const items = NAV_ITEMS[variant];

  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [spyActive, setSpyActive] = useState("Home");
  const activeLabel = fixedActive ?? spyActive;

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY >= STICKY_OFFSET);

      if (!isHome) return;
      let current = "Home";
      for (const item of items) {
        if (!isSectionLink(item.href)) continue;
        const section = document.querySelector(item.href);
        if (section && pageTop(section) - 90 <= scrollY) current = item.label;
      }
      setSpyActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    // Section offsets change as images load, so re-check when the page resizes
    const resizeObserver = new ResizeObserver(onScroll);
    resizeObserver.observe(document.body);
    return () => {
      window.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
    };
  }, [isHome, items]);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-visible", mobileOpen);
    return () => document.body.classList.remove("mobile-menu-visible");
  }, [mobileOpen]);

  const handleNavigate = (event, href) => {
    if (isHome) scrollToSection(event, href);
  };

  const handleMobileNavigate = (event, href) => {
    handleNavigate(event, href);
    setMobileOpen(false);
  };

  return (
    <header id="header" className={isHome ? "header-layout1" : undefined}>
      <div id="sticky-header" className={`menu-area transparent-header${isSticky ? " sticky-menu" : ""}`}>
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <Link href="/">
                      <img src="/assets/img/logo/swap-white.png" alt="Logo" />
                    </Link>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <Navigation items={items} activeLabel={activeLabel} onNavigate={handleNavigate} />
                  </div>
                  <div className="header-action">
                    <ul className="list-wrap">
                      {isHome ? (
                        <>
                          <li></li>
                          <li className="header-login">
                            <a className="btn2" href="#">LOGIN</a>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="header-login">
                            <a href="#">Login<i className="fas fa-user"></i></a>
                          </li>
                          <li className="offcanvas-menu">
                            <a
                              href="#"
                              className="menu-tigger"
                              onClick={(e) => {
                                e.preventDefault();
                                setOffcanvasOpen(true);
                              }}
                            >
                              <i className="fas fa-bars"></i>
                            </a>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div className="mobile-nav-toggler" onClick={() => setMobileOpen(true)}>
                    <i className="fas fa-bars"></i>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <nav className="menu-box">
          <div className="close-btn" onClick={() => setMobileOpen(false)}>
            <i className="fas fa-times"></i>
          </div>
          <div className="nav-logo">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <img src="/assets/img/logo/swap-white.png" alt="Logo" />
            </Link>
          </div>
          <div className="menu-outer">
            <Navigation items={items} activeLabel={activeLabel} onNavigate={handleMobileNavigate} />
          </div>
          <div className="social-links">
            <ul className="clearfix list-wrap">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><XIcon /></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              {!isHome && <li><a href="#"><i className="fab fa-youtube"></i></a></li>}
            </ul>
          </div>
        </nav>
      </div>
      <div className="menu-backdrop" onClick={() => setMobileOpen(false)}></div>

      {/* OffCanvas menu (inner pages) */}
      {!isHome && (
        <>
          <div className={`extra-info${offcanvasOpen ? " active" : ""}`}>
            <div className="close-icon menu-close">
              <button onClick={() => setOffcanvasOpen(false)}>
                <i className="far fa-window-close"></i>
              </button>
            </div>
            <div className="logo-side mb-30">
              <Link href="/">
                <img src="/assets/img/logo/swap-white.png" alt="Logo" />
              </Link>
            </div>
            <div className="side-info mb-30">
              <div className="contact-list mb-30">
                <h4>Office Address</h4>
                <p>VR One - Commercial Business Center 1st Floor</p>
              </div>
              <div className="contact-list mb-30">
                <h4>Phone Number</h4>
                <p>+91 8459386187</p>
              </div>
              <div className="contact-list mb-30">
                <h4>Email Address</h4>
                <p>info@ecrocxcoin.io</p>
              </div>
            </div>
            <div className="social-icon-right mt-30">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><XIcon /></a>
              <a href="#"><i className="fab fa-google-plus-g"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div
            className={`offcanvas-overly${offcanvasOpen ? " active" : ""}`}
            onClick={() => setOffcanvasOpen(false)}
          ></div>
        </>
      )}
    </header>
  );
}
