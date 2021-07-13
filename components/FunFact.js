import Link from "next/link"

function FunFact() {
    return (
        <div className="fun-facts">
        <div className="container">
          <div className="more-info-content">
            <div className="row">
              <div className="col-md-6">
                <div className="left-image">
                  <img
                    src="assets/images/about-1-570x350.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 align-self-center">
                <div className="right-content">
                  <span>Who we are</span>
                  <h2>
                    Get to know about <em>our company</em>
                  </h2>
                  <p>
                    Aiming at respect, credibility, honesty, and respect,
                    Travelo has emerged as one of the most reputed organizations
                    in the capital city of India. The company was found in 2013
                    In New Delhi (India).
                  </p>
                  <Link href="/about">
                    <a className="filled-button">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default FunFact
