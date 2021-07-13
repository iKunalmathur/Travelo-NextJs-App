function Testimonials() {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>
                What they say <em>about us</em>
              </h2>
              <span>testimonials from our greatest clients</span>
            </div>
          </div>
          <div className="col-md-12">
            <div className="owl-testimonials owl-carousel">
              <div className="testimonial-item">
                <div className="inner-content">
                  <h4>John Doe</h4>
                  <span>Chief Financial Analyst</span>
                  <p>
                    "I have booked my honeymoon trip to Kerala. I must say that
                    our trip was perfectly organized. Your superb assistance and
                    hospitality made our honeymoon trip memorable ….Would
                    definitely recommend to all my friends and relatives"
                  </p>
                </div>
                <img src="http://placehold.it/60x60" alt="" />
              </div>
              <div className="testimonial-item">
                <div className="inner-content">
                  <h4>Jane Doe</h4>
                  <span>Financial Analyst</span>
                  <p>
                    "I have booked my honeymoon trip to Kerala. I must say that
                    our trip was perfectly organized. Your superb assistance and
                    hospitality made our honeymoon trip memorable ….Would
                    definitely recommend to all my friends and relatives"
                  </p>
                </div>
                <img src="http://placehold.it/60x60" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
