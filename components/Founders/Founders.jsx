import "./Founders.css";

const FOUNDERS = [
  {
    name: "Karan Pandey",
    role: "Founder & CEO",
    image: "ceo.webp",
    linkedin: "https://www.linkedin.com/in/karanpandeyecrox",
    instagram: "https://www.instagram.com/x__.karan__x",
  },
  {
    name: "Ritishree Sahu",
    role: "Co-Founder",
    image: "co-found.webp",
    linkedin: "https://www.linkedin.com/in/ritishree-sahu",
    instagram: "https://www.instagram.com/riti_sahu",
  },
];

export default function Founders() {
  return (
    <div className="pb-110" id="founders">
      <div className="container">
        <div className="section-title text-center mb-50">
          <h2 className="title style2">Active founders</h2>
        </div>
        <div className="row gy-4 justify-content-center">
          {FOUNDERS.map((founder) => (
            <div className="col-lg-6" key={founder.name}>
              <div className="founder-card">
                <div className="founder-card-img">
                  <img src={`/assets/img/update/team/${founder.image}`} alt="img" />
                </div>
                <div className="founder-card-details">
                  <h3 className="founder-card-title">{founder.name}</h3>
                  <p className="founder-card-desig">{founder.role}</p>
                  <div className="social-btn">
                    <a href={founder.linkedin}>
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={founder.instagram}>
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
