import App from "../layouts/App";

import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useState } from "react";

function contact() {
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function formSubmit(data) {
    setSending(true);

    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    try {
      const response = await axios(config);
      if (response.status == 200) {
        toast.success("Thank you for contacting us, we will be in touch soon.");
        reset();
        setSending(false);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <App>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      {/* <!-- Page Content --> */}
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Contact Us</h1>
              <span>feel free to send us a message now!</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-information">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-item">
                <i className="fa fa-phone"></i>
                <h4>Phone</h4>
                <p>
                  Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate nec
                  cursus augue.
                </p>
                <a href="#">+1 333 4040 5566</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-item">
                <i className="fa fa-envelope"></i>
                <h4>Email</h4>
                <p>
                  Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate nec
                  cursus augue.
                </p>
                <a href="#">contact@company.com</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-item">
                <i className="fa fa-map-marker"></i>
                <h4>Location</h4>
                <p>
                  212 Barrington Court New York str <br /> USA
                </p>
                <a href="#">View on Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="callback-form contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Send us a <em>message</em>
                </h2>
                <span>Suspendisse a ante in neque iaculis lacinia</span>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center w-100">
              <div className="col-md-8">
                <div className="contact-form">
                  <form id="contact" onSubmit={handleSubmit(formSubmit)}>
                    <div className="row">
                      <div className="col-lg-4 col-md-12 col-sm-12">
                        <fieldset>
                          <input
                            {...register("name", { required: true })}
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Full Name"
                            required=""
                          />
                          <span className="text-left font-sm text-danger">
                            {errors.name?.type === "required" &&
                              "Name Cannot Be Empty"}
                          </span>
                        </fieldset>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12">
                        <fieldset>
                          <input
                            {...register("email", { required: true })}
                            type="text"
                            className="form-control"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            placeholder="E-Mail Address"
                            required=""
                          />
                          <span className="text-left font-sm text-danger">
                            {errors.email?.type === "required" &&
                              "email Cannot Be Empty"}
                          </span>
                        </fieldset>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12">
                        <fieldset>
                          <input
                            {...register("subject", { required: true })}
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                            required=""
                          />
                          <span className="text-left font-sm text-danger">
                            {errors.subject?.type === "required" &&
                              "subject Cannot Be Empty"}
                          </span>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            {...register("message", { required: true })}
                            rows="6"
                            className="form-control"
                            id="message"
                            placeholder="Your Message"
                            required=""
                          ></textarea>
                          <span className="text-left font-sm text-danger">
                            {errors.message?.type === "required" &&
                              "message Cannot Be Empty"}
                          </span>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="filled-button"
                          >
                            {sending ? "Sending..." : "Send Message"}
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="map">
        {/* <!-- How to change your own map point
	1. Go to Google Maps
	2. Click on your location point
	3. Click "Share" and choose "Embed map" tab
	4. Copy only URL and paste it within the src="" field below
// --> */}
        <iframe
          src="https://maps.google.com/maps?q=Av.+Lúcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="500px"
          frameBorder="0"
          style={{ border: "0" }}
          allowFullScreen
        ></iframe>
      </div>
    </App>
  );
}

export default contact;
