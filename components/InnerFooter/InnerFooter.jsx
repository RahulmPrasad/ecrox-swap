"use client";

import Link from "next/link";
import "./InnerFooter.css";

const WIDGETS = [
  {
    title: "Usefull Links",
    columnClass: "col-xl-3 col-lg-3 col-md-4 col-sm-6",
    links: ["Contact us", "How it Works", "Create", "Explore", "Terms & Services"],
  },
  {
    title: "SOLUTIONS",
    columnClass: "col-xl-3 col-lg-2 col-md-4 col-sm-6",
    links: ["Token Suite", "Ecosystem", "Investment", "Portal", "Tokenization"],
  },
  {
    title: "Usefull Links",
    columnClass: "col-xl-3 col-lg-3 col-md-4 col-sm-4",
    links: ["Help Center", "Partners", "Suggestions", "Blog", "Newsletters"],
  },
];

export default function InnerFooter() {
  const handleSubscribe = (event) => event.preventDefault();

  return (
    <footer>
      <div className="footer-area footer-bg">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              {WIDGETS.map((widget, index) => (
                <div className={widget.columnClass} key={index}>
                  <div className="footer-widget">
                    <h4 className="fw-title">{widget.title}</h4>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        {widget.links.map((label) => (
                          <li key={label}><Link href="/contact">{label}</Link></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-xl-3 col-lg-4 col-sm-8">
                <div className="footer-widget">
                  <h4 className="fw-title">Subscribe Newsletter</h4>
                  <div className="footer-newsletter">
                    <p>Subscribe with your email to us to get updated </p>
                    <form onSubmit={handleSubscribe}>
                      <input type="text" placeholder="Info@gmail.com" />
                      <button type="submit" aria-label="Subscribe"><i className="fas fa-paper-plane"></i></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-text">
                  <p>Copyright © 2024 Ecrox Swap All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
