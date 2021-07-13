import axios from "axios";
import Link from "next/link";
import App from "../../layouts/App";

export async function getStaticProps(context) {
  const { params } = context;

  async function getPackage() {
    let config = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/packages?slug=${params.slug}`,
      header: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios(config);
    return res.data[0];
  }

  const pkg = await getPackage();

  return {
    props: {
      pkg,
    },
  };
}

export async function getStaticPaths() {
  async function getPackagesSlug() {
    let config = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/packages`,
      header: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios(config);
    return res.data;
  }

  const packages = await getPackagesSlug();

  const paths = packages.map((p) => ({
    params: { slug: p.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

function packageDetails({ pkg }) {
  return (
    <App>
      {/* <!-- Page Content --> */}
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{pkg.title}</h1>
              <h3>{pkg.price ? `₹ ${pkg.price} /- P.P` : "Ask For Price"}</h3>
              <br />
              <span>INSTANT CONFIRMATION</span>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div>
                <img
                  src={
                    pkg.image
                      ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${pkg.image.url}`
                      : "/assets/images/720x480.png"
                  }
                  alt=""
                  className="img-fluid wc-image"
                />
              </div>
              <br />
            </div>

            <div className="col-md-5">
              <form action="#" method="post" className="form">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Status</span>
                      <strong className="pull-right">{pkg.status}</strong>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Pickup</span>
                      <strong className="pull-right">Airport/Bus Depo</strong>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Duration</span>
                      <strong className="pull-right">{pkg.duration}</strong>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Price</span>
                      <strong className="pull-right">
                        {pkg.price
                          ? `₹ ${pkg.price} / per person`
                          : "Ask For Price"}
                      </strong>
                    </div>
                  </li>
                </ul>
              </form>

              <br />

              <Link
                // href={{ pathname: "/enquiry", query: { package_id: pkg.id } }}
                href={{ pathname: `/packages/${pkg.slug}/enquiry` }}
              >
                <a className="filled-button btn-block text-center">Enquiry</a>
              </Link>
              {/* <a
                href="#"
                data-toggle="modal"
                data-target="#exampleModal"
                className="filled-button btn-block text-center"
              >
                Enquiry Model Btn
              </a> */}

              {/* model */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                style={{ display: "none" }}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Enquiry
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form action="#" id="contact">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter full name"
                                required=""
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter email address"
                                required=""
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter phone"
                                required=""
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="From date"
                                    required=""
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="To date"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="button" className="btn btn-primary">
                        Send Request
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <br />
            </div>
          </div>

          <div className="tabs-content" style={{ display: "block" }}>
            <h4>Overview</h4>
            <p>{pkg.overview}</p>
          </div>

          <br />

          <div className="tabs-content" style={{ display: "block" }}>
            <h4>Itenaries &amp; Days</h4>

            <div className="accordion" id="accordionExample">
              {pkg.itinerary.map((i, index) => {
                return (
                  <div className="card border-0" key={i.id}>
                    <div className="card-header " id="headingOne">
                      <h5 className="mb-0 ">
                        <button
                          className="btn btn-link text-left text-body w-100 d-flex justify-content-between align-items-center"
                          type="button"
                          data-toggle="collapse"
                          data-target={`#collapse-${i.id}`}
                          aria-expanded="true"
                          aria-controls={`collapse-${i.id}`}
                        >
                          <div>
                            {i.heading}
                            <br />
                            <small>{i.sub_heading}</small>
                          </div>
                          <div>
                            <i
                              className="fa fa-chevron-down text-accent"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </button>
                      </h5>
                    </div>

                    <div
                      id={`collapse-${i.id}`}
                      className={`collapse ${index === 0 ? "show" : null}`}
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">{i.overview}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <br />

          <div className="tabs-content" style={{ display: "block" }}>
            <div className="row">
              <div className="col-sm">
                <h4>What's Include</h4>

                <ul
                  className="bs-list"
                  dangerouslySetInnerHTML={{ __html: pkg.includes }}
                ></ul>
              </div>
              <div className="col-md">
                <h4>What's Exclude</h4>
                <ul
                  className="bs-list"
                  dangerouslySetInnerHTML={{ __html: pkg.excludes }}
                ></ul>
              </div>
            </div>
          </div>
          <br />
          <div className="tabs-content" style={{ display: "block" }}>
            <h4>Why Book With Us?</h4>
            <ul className="bs-list">
              <li>
                <i
                  className="fa fa-check-circle-o text-accent"
                  aria-hidden="true"
                ></i>{" "}
                No-hassle best price guarantee
              </li>
              <li>
                {" "}
                <i
                  className="fa fa-check-circle-o text-accent"
                  aria-hidden="true"
                ></i>{" "}
                Customer care available 24/7
              </li>
              <li>
                {" "}
                <i
                  className="fa fa-check-circle-o text-accent"
                  aria-hidden="true"
                ></i>{" "}
                Hand-picked Tours & Activities
              </li>
              <li>
                {" "}
                <i
                  className="fa fa-check-circle-o text-accent"
                  aria-hidden="true"
                ></i>{" "}
                Free Travel Insureance
              </li>
            </ul>
          </div>

          <br />

          <div className="row">
            <div className="col-lg-9">
              <div className="tabs-content" style={{ display: "block" }}>
                <h4>Map</h4>
                {/* <!-- How to change your own map point
	1. Go to Google Maps
	2. Click on your location point
	3. Click "Share" and choose "Embed map" tab
	4. Copy only URL and paste it within the src="" field below
// --> */}
                <iframe
                  src={pkg.map_url}
                  width="100%"
                  height="250px"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                {/* <img
                  src="/assets/images/map.jpg"
                  className="img-fluid"
                  alt=""
                /> */}
              </div>
            </div>

            <div className="col-lg-3">
              <div className="tabs-content">
                <h4>Get a Question?</h4>
                {/* <!-- <p>Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</p> --> */}
                <p>
                  <span>Name</span>

                  <br />

                  <strong>John doe</strong>
                </p>

                <p>
                  <span>Within India</span>

                  <br />

                  <strong>
                    <a href="tel:456789123">+91 9876543210</a>
                  </strong>
                </p>

                <p>
                  <span>Email</span>

                  <br />

                  <strong>
                    <a href="mailto:sales@example.com">sales@example.com</a>
                  </strong>
                </p>
              </div>
            </div>
          </div>

          <br />

          <br />
          <br />
          <br />
        </div>
      </div>
    </App>
  );
}

export default packageDetails;
