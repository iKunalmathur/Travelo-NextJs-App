import { toast, ToastContainer } from "react-toastify";
import App from "../../../layouts/App";
import { getRequest, postRequest } from "../../../services/axiosAPI";

export async function getServerSideProps(context) {
  const { params } = context;

  const packages = await getRequest(`/packages?slug=${params.slug}`);

  // console.log(packages.statusCode);

  if (packages.length === 0) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pkg: packages[0],
    },
  };
}

function enquiry({ pkg }) {
  async function formSubmit(event) {
    event.preventDefault();
    const data = {
      package_id: pkg.id,
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };

    const res = await postRequest("/inquiries", data);
    if (res.status > 299) {
      const errors = res.data.data.errors;
      //   console.log(errors);
      for (const key in errors) {
        errors[key].forEach((message) => {
          //   console.log("Error !!", message);
          toast.error(message);
        });
      }
    } else {
      // console.log("Inquiry Created", res);
      toast.success("Inquiry Send Successfully");
      // reset input fileds
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.subject.value = "";
      event.target.message.value = "";
    }
  }
  return (
    <App>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* <!-- Page Content --> */}
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Enquiry For</h1>
              <span>{pkg.title}</span>
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
                  <form onSubmit={formSubmit}>
                    <div className="row">
                      <div className="col-lg-4 col-md-12 col-sm-12">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Full Name"
                            required
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
                            required
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
                            required
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
                            required
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
        </div>
      </div>
    </App>
  );
}

export default enquiry;
