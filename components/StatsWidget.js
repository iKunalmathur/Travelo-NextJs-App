function StatsWidget() {
  return (
    <div className="fun-facts">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="left-content">
              <span>Lorem ipsum dolor sit amet</span>
              <h2>
                Modi esse sapiente tenetur <em>impedit laudantium laborum</em>
              </h2>
              <p>
                Pellentesque ultrices at turpis in vestibulum. Aenean pretium
                elit nec congue elementum. Nulla luctus laoreet porta. Maecenas
                at nisi tempus, porta metus vitae, faucibus augue.
                <br />
                <br />
                Fusce et venenatis ex. Quisque varius, velit quis dictum
                sagittis, odio velit molestie nunc, ut posuere ante tortor ut
                neque.
              </p>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="row">
              <div className="col-md-6">
                <div className="count-area-content">
                  <div className="count-digit">1234</div>
                  <div className="count-title">Destinations</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="count-area-content">
                  <div className="count-digit">6280</div>
                  <div className="count-title">Happy clients</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="count-area-content">
                  <div className="count-digit">23</div>
                  <div className="count-title">Cities</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="count-area-content">
                  <div className="count-digit">26</div>
                  <div className="count-title">Packages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsWidget;
