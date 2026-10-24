import { LocationIcon } from "@/components/Icons/Icons";
import "./Events.css";

const EVENTS = [
  { image: "1-1.png", title: "BlockVienna", city: "Ahmedabad", date: "August 17, 2024" },
  { image: "1-2.png", title: "Summit Summits", city: "Vadodara", date: "June 12, 2024" },
  { image: "1-3.png", title: "Blockchain Summit", city: "Mumbai", date: "July 05, 2024" },
  { image: "1-4.png", title: "Economy ICO 2024", city: "Delhi", date: "September 09, 2024" },
  { image: "1-5.png", title: "Blockchain summit", city: "Pune", date: "September 14, 2024" },
  { image: "1-6.png", title: "Blockchain & bitcoin", city: "Anand", date: "August 14, 2024" },
  { image: "1-7.png", title: "Money conference", city: "Surat", date: "May 24, 2024" },
  { image: "1-8.png", title: "Crypto Economy ", city: "Gandhinagar", date: "May 24, 2024" },
];

export default function Events() {
  return (
    <div className="event-area">
      <div className="container">
        <div className="section-title text-center mb-50">
          <h2 className="title style2">Join Events for meet us</h2>
        </div>
        <div className="row gy-60 gx-30 justify-content-center">
          {EVENTS.map((event) => (
            <div className="col-lg-3 col-md-6" key={event.image}>
              <div className="event-card">
                <div className="event-card-img">
                  <a href="#">
                    <img src={`/assets/img/update/event/${event.image}`} alt="blog image" />
                  </a>
                </div>
                <div className="event-card-content">
                  <h4 className="event-card-title"><a href="#">{event.title}</a></h4>
                  <div className="event-meta">
                    <a href="#">
                      <LocationIcon />
                      {event.city}
                    </a>
                    <a href="#">
                      <i className="far fa-clock"></i>
                      {event.date}
                    </a>
                  </div>
                  <a href="#" className="btn btn3">JOIN US</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
