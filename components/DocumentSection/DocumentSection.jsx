"use client";

import "./DocumentSection.css";

const DOCUMENTS = ["Whitepaper", "Token Sale Terms", "Presentation", "Lightpaper"];

export default function DocumentSection() {
  const handleSubmit = (event) => event.preventDefault();

  return (
    <section className="document-area">
      <div className="container">
        <div className="document-inner-wrap">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-60">
                <h2 className="title">Have Any Questions?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="document-form-wrap">
                <h4 className="title">Get In Touch Now</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="email" placeholder="Your Email" />
                      </div>
                    </div>
                  </div>
                  <div className="form-grp">
                    <textarea name="message" placeholder="Enter you message....."></textarea>
                  </div>
                  <button type="submit" className="btn">Send Message</button>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="document-wrap">
                <h4 className="title">Read Documents</h4>
                <ul className="list-wrap">
                  {DOCUMENTS.map((label) => (
                    <li key={label}>
                      <a href="#">
                        <span className="icon"><i className="fa-solid fa-file-lines"></i></span>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
                <a href="#" className="btn">Download All</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
