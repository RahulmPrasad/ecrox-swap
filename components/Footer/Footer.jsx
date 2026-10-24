import { XIcon } from "@/components/Icons/Icons";
import RippleShape from "@/components/RippleShape/RippleShape";
import "./Footer.css";

const MENU_LINKS = ["HOME", "OUR PROJECTS", "OUR TEAM", "NEWS FAQ", "DOCUMENTS"];
const BOTTOM_LINKS = ["Job & Career", "Terms and Condition", "Help Center"];

export default function Footer() {
  return (
    <footer className="footer-wrapper footer-layout1 position-relative">
      <div className="bg-gradient-1"></div>
      <div className="footer-ripple">
        <RippleShape />
      </div>
      <div className="container">
        <div className="footer-menu-area">
          <div className="row gy-4 justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-4">
              <div className="social-btn justify-content-center justify-content-lg-start">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><XIcon /></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8 text-lg-end text-center">
              <ul className="footer-menu-list">
                {MENU_LINKS.map((label) => (
                  <li key={label}><a href="#">{label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap text-center text-lg-start">
        <div className="container">
          <div className="row gy-3 justify-content-between align-items-center">
            <div className="col-lg-6 align-self-center">
              <p className="copyright-text">
                Copyright © 2024 <a href="#">Ecrox Swap</a> All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="footer-links">
                {BOTTOM_LINKS.map((label) => (
                  <li key={label}><a href="#">{label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
