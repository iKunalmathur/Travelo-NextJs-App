import axios from "axios";
import Link from "next/link";

import App from "../layouts/App";

import Testimonials from "../components/Testimonials";
import BlogWidget from "../components/BlogWidget";
import Categories from "../components/Categories";
import Packages from "../components/Packages";
import FunFact from "../components/FunFact";

export async function getStaticProps(context) {
  async function getPackages() {
    let config = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/packages?featured=true`,
      header: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios(config);
    return res.data;
  }

  async function getCategories() {
    let config = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/categories`,
      header: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios(config);
    return res.data;
  }

  const featuredPackages = await getPackages();
  const categories = await getCategories();

  return {
    props: {
      featuredPackages,
      categories,
    },
  };
}

export default function Home({ featuredPackages, categories }) {
  return (
    <App>
      {/* <!-- Page Content --> */}
      {/* <!-- Banner Starts Here --> */}
      <div className="main-banner header-text" id="top">
        <div className="Modern-Slider">
          {/* <!-- Item --> */}
          <div className="item item-1">
            <div className="img-fill">
              <div className="text-content">
                <h6>With Us</h6>
                <h4>
                  Travel Trought Out The <br /> Beauty Of India
                </h4>
                <p>
                  “The world is a book and those who do not travel read only one
                  page.” ~ Saint Augustine.
                </p>
                <Link href="/packages">
                  <a className="filled-button">Packages</a>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- // Item --> */}
        </div>
      </div>
      {/* <!-- Banner Ends Here --> */}

      <div className="request-form">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h4>Request a call back right now ?</h4>
              <span>
                Mauris ut dapibus velit cras interdum nisl ac urna tempor
                mollis.
              </span>
            </div>
            <div className="col-md-4">
              <Link href="/contact">
                <a className="border-button">Contact Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*Featured Packages */}
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Featured <em>Packages</em>
                </h2>
                <span>Aliquam id urna imperdiet libero mollis hendrerit</span>
              </div>
            </div>
            <Packages packages={featuredPackages} />
          </div>
        </div>
      </div>

      {/* Packages Categories */}

      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Categories</h2>
                <span>Aliquam id urna imperdiet libero mollis hendrerit</span>
              </div>
            </div>
            <Categories categories={categories} />
          </div>
        </div>
      </div>

      {/* Fun Fact */}

      <FunFact />

      {/*Blog Widget Component*/}

      {/* <BlogWidget /> */}

      {/*Testimonials  Component*/}
      <Testimonials />

      <div className="callback-form">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Request a <em>call back</em>
                </h2>
                <span>Feel free to get in touch with me</span>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center w-100">
              <div className="col-md-8 ">
                <div className="contact-form">
                  <form id="contact" action="" method="post">
                    <div className="row">
                      <div className="col-lg-4 col-md-12 col-sm-12">
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
                      <div className="col-lg-4 col-md-12 col-sm-12">
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
                      <div className="col-lg-4 col-md-12 col-sm-12">
                        <fieldset>
                          <input
                            name="subject"
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
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
                            className="border-button"
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

          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </App>
  );
}
