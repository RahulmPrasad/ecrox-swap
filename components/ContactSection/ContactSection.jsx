"use client";

import "./ContactSection.css";

const CONTACT_INFO = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Location",
    content: "VR One - Commercial Business Center 1st Floor",
  },
  {
    icon: "fas fa-phone-alt",
    title: "Contact",
    content: <a href="tel:+918459386187">+91 8459386187</a>,
  },
  {
    icon: "fas fa-envelope",
    title: "Email",
    content: <a href="mailto:info@ecrocxcoin.io">info@ecrocxcoin.io</a>,
  },
  {
    icon: "fas fa-business-time",
    title: "Visit Between",
    content: (
      <>
        Mon - Sat : 8.00-5.00 <br /> Sunday : Closed
      </>
    ),
  },
];

export default function ContactSection() {
  // TODO: connect to a mail endpoint (the template posted to a mail.php that isn't included)
  const handleSubmit = (event) => event.preventDefault();

  return (
    <section className="contact-area pt-140 pb-140">
      <div className="container">
        <div className="contact-info-wrap">
          <div className="row justify-content-center">
            {CONTACT_INFO.map((info) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={info.title}>
                <div className="contact-info-item">
                  <div className="icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="content">
                    <h6 className="title">{info.title}</h6>
                    <p>{info.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-form-wrap">
          <div className="row g-0">
            <div className="col-57 order-0 order-lg-2">
              <div className="contact-form">
                <h4 className="title">Send a message</h4>
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="text" name="name" placeholder="Enter you name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="email" name="email" placeholder="Enter you email" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="number" name="number" placeholder="Mobile no" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="text" name="company" placeholder="Company" />
                      </div>
                    </div>
                  </div>
                  <div className="form-grp">
                    <textarea name="message" placeholder="Enter you message....."></textarea>
                  </div>
                  <button type="submit" className="btn">Send Message</button>
                </form>
                <p className="ajax-response mb-0"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
