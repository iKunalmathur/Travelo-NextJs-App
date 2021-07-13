import axios from "axios";
import Link from "next/link";

import Packages from "../../components/Packages";
import App from "../../layouts/App";

export async function getStaticProps(context) {
  async function getPackages() {
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

  const packages = await getPackages();

  return {
    props: {
      packages,
    },
  };
}

function index({ packages }) {
  return (
    <App>
      {/* <!-- Page Content --> */}
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Packages</h1>
              <span>
                "The journey, not the arrival matters, - T.S. Elliot."
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="container">
          <div className="row">
            <Packages packages={packages} />
          </div>

          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </App>
  );
}

export default index;
