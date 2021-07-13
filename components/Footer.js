function Footer() {
  return (
    <>
      {/* <!-- Footer Starts Here --> */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 footer-item">
              <h4>{process.env.NEXT_PUBLIC_TEXT_LOGO}</h4>
              <p>
                Aiming at respect, credibility, honesty, and respect, Travelo
                has emerged as one of the most reputed organizations in the
                capital city of India. The company was found in 2013 In New
                Delhi (India).
              </p>
              <ul className="social-icons">
                <li>
                  <a
                    rel="nofollow"
                    target="_blank"
                    href={process.env.NEXT_PUBLIC_FACEBOOK}
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    rel="nofollow"
                    target="_blank"
                    href={process.env.NEXT_PUBLIC_TWITTER}
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    rel="nofollow"
                    target="_blank"
                    href={process.env.NEXT_PUBLIC_INSTAGRAM}
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-item">
              <h4>Useful Links</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Vivamus ut tellus mi</a>
                </li>
                <li>
                  <a href="#">Nulla nec cursus elit</a>
                </li>
                <li>
                  <a href="#">Vulputate sed nec</a>
                </li>
                <li>
                  <a href="#">Cursus augue hasellus</a>
                </li>
                <li>
                  <a href="#">Lacinia ac sapien</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-item">
              <h4>Additional Pages</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-item last-item">
              <h4>Contact Us</h4>
              <div className="contact-form">
                <form id="contact footer-contact" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Full Name"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="E-Mail Address"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="filled-button"
                        >
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                Copyright © {new Date().getFullYear()}{" "}
                {process.env.NEXT_PUBLIC_TEXT_LOGO} Made With{" "}
                <i className="fa fa-heart" aria-hidden="true"></i> By{" "}
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Kunalmathur.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      

      {/* <!-- Bootstrap core JavaScript --> */}
      <script src="/vendor/jquery/jquery.min.js" />
      <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" />

      {/* <!-- Additional Scripts --> */}
      <script src="/assets/js/custom.js" />
      <script src="/assets/js/owl.js" />
      <script src="/assets/js/slick.js" />
      <script src="/assets/js/accordions.js" />
    </>
  );
}

export default Footer;
