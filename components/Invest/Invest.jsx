import "./Invest.css";

const OPTIONS = [
  { icon: "invest-icon-1.png", label: "Enclose BTC" },
  { icon: "invest-icon-2.png", label: "Enclose ETH" },
  { icon: "invest-icon-3.png", label: "Bank Transfer" },
  { icon: "invest-icon-4.png", label: "Enclose UXC" },
];

export default function Invest() {
  return (
    <div className="pt-130 overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title text-center mb-50">
              <h2 className="title style2">Invest in Our ecosystem shares today</h2>
            </div>
          </div>
        </div>
        <div className="row gy-30">
          {OPTIONS.map((option) => (
            <div className="col-lg-3 col-md-6" key={option.label}>
              <div className="invest-card">
                <div className="invest-card-icon">
                  <img src={`/assets/img/update/invest/${option.icon}`} alt="icon" />
                </div>
                <a className="btn btn3" href="#">{option.label}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
