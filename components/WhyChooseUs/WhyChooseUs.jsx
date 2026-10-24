import "./WhyChooseUs.css";

const PROGRESS = [
  { title: "Privacy", percent: 70, max: 7 },
  { title: "Low gas Fees", percent: 80, max: 8 },
  { title: "Security", percent: 90, max: 9 },
];

const FEATURES = [
  {
    icon: "feature-icon1-1.svg",
    title: "Efficient Swapping",
    text: "Ecrox Swap allows users to swap various cryptocurrencies",
  },
  {
    icon: "feature-icon1-2.svg",
    title: "High Liquidity",
    text: "The platform provides ample liquidity for a wide range of assets",
  },
  {
    icon: "feature-icon1-3.svg",
    title: "User-Friendly Interface",
    text: "Ecrox Swap boasts an intuitive and user-friendly interface",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="wcu-area-1 pt-130 pb-140 position-relative" id="feature">
      <div className="bg-gradient-1">
        <img src="/assets/img/update/bg/bg-gradient1-1.jpg" alt="img" />
      </div>
      <div className="container">
        <div className="mb-25">
          <div className="row gy-5">
            <div className="col-lg-7">
              <div className="section-title mb-0">
                <h2 className="title style2">
                  Why You Choose <span className="tit-1">Ecrox Swap</span>?
                </h2>
                <p className="sec-text text-justify">
                  Ecrox Swap stands out in the crowded DeFi space due to its unique features and the backing of
                  the Ecrox Chain ecosystem. Some compelling reasons to choose Ecrox Swap include
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="wcu-thumb text-center alltuchtopdown">
                <img src="/assets/img/update/normal/why_1-1.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-5 justify-content-between">
          <div className="col-lg-5">
            <div className="wcu-amount-quantity">
              <div className="amount">
                <h5 className="title">Amount invested</h5>
                <p className="price">50,000 $</p>
              </div>
              <div className="quantity">
                <h5 className="title">Quantity </h5>
                <p className="price">500,000 </p>
              </div>
            </div>
            <ul className="wcu-price-progress-wrap">
              {PROGRESS.map((item) => (
                <li key={item.title}>
                  <h6 className="progress-wrap-title">{item.title}</h6>
                  <div className="skill-feature">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: `${item.percent}%` }}></div>
                    </div>
                    <div className="progress-value">
                      <span>0</span>
                      <span>{item.max}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            {FEATURES.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <div className="feature-card-icon">
                  <img src={`/assets/img/update/icon/${feature.icon}`} alt="img" />
                </div>
                <div className="feature-card-details">
                  <h4 className="feature-card-title">{feature.title}</h4>
                  <p className="feature-card-text">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
