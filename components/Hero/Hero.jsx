import RippleShape from "@/components/RippleShape/RippleShape";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-wrapper hero-1">
      <div className="hero-bg-gradient"></div>
      <RippleShape />

      <div className="container">
        <div className="hero-style1">
          <div className="row flex-row-reverse">
            <div className="col-lg-3"></div>
            <div className="col-lg-9">
              <h1 className="hero-title">
                <span className="h1-hero">Ecrox Swap</span> <br /> The Revolutionary Currency Swap platform
              </h1>
              <div className="btn-wrap">
                <a href="#" className="btn btn2">Swap Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-countdown-wrap">
          <h2 className="hero-countdown-wrap-title">Currency Exchange Rates</h2>
          <ul className="skill-feature_list">
            <li><span>Value</span> of currency invested</li>
            <li><span>Swapred</span>Currencies</li>
            <li>
              <h4>Total Currencies</h4>
            </li>
          </ul>
          <div className="skill-feature">
            <div className="progress">
              <div className="progress-bar" style={{ width: "80%" }}></div>
            </div>
            <div className="progress-value-max">100 Min $</div>
          </div>
          <ul className="skill-feature_list style2">
            <li>7.75 Min</li>
            <li>1.5 Min</li>
            <li>140,000 $ chosen</li>
          </ul>
          <div className="banner-countdown-wrap">
            <div className="coming-time"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
