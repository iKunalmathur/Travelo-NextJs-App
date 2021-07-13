import App from "../layouts/App";

import StatsWidget from "../components/StatsWidget";

function about() {
  return (
    <App>
      {/* <!-- Page Content --> */}
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>About Us</h1>
              <span>We have over 20 years of experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="more-info about-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="more-info-content">
                <div className="row">
                  <div className="col-md-6 align-self-center">
                    <div className="right-content">
                      <span>“There are many variations”</span>
                      <h2>
                        Get to know about <em>our company</em>
                      </h2>
                      <p>
                        Aiming at respect, credibility, honesty, and respect,
                        Travelo has emerged as one of the most reputed
                        organizations in the capital city of India. The company
                        was found in 2013 In New Delhi (India). We are offering
                        exceptional range of travel services for corporate as
                        well as leisure travels across the globe. Our forte lies
                        in designing customized travel packages for inbound,
                        domestic, and outbound travel, along with cruise,
                        conference, hotel reservations, and leisure holidays.
                        Our comprehensive range of services include airline
                        ticketing services, railway ticketing services, cruise
                        services, passport & visa services, event organizing
                        services, and travel insurance services. Clients can
                        contact us anytime for getting exceptional services at
                        the most reasonable charges.
                      </p>
                      <p>
                        <b>1) Our Team</b> - Our Team of Tour Executives are
                        well versed in planning and executing Holiday packages
                        in India. We have professional and friendly drivers
                        speak English and with years of experience.
                      </p>
                      <p>
                        <b>2) Responsible tourism</b> - We run all our trips in
                        as responsible manner as possible, socially, culturally,
                        economically and environmentally.
                      </p>
                      <p>
                        <b>3) Satisfaction</b> - We rely very heavily on word of
                        mouth and repeat custom for our bookings, consequently
                        it is imperative that we give our clients the best
                        holidays possible. We believe that over 16 years of
                        operation and a more extensive programme than anyone
                        else in our corner of the travel industry illustrates
                        our success.
                      </p>
                      <p>
                        <b>4) Financial security</b> - We provide complete
                        financial security for all our clients and adhere to all
                        government regulations concerning the safety of our
                        clients' money.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="left-image">
                      <img src="/assets/images/about-1-570x350.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StatsWidget />
    </App>
  );
}

export default about;
