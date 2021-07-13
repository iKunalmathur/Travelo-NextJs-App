import axios from "axios";
import App from "../../layouts/App";
import Categories from "../../components/Categories";

export async function getStaticProps(context) {
  const { params } = context;

  async function getCategory() {
    let config = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/categories`,
      header: {
        "Content-Type": "appliction/json",
      },
    };

    const response = await axios(config);

    return response.data;
  }

  const categories = await getCategory();

  return {
    props: {
      categories,
    },
  };
}

function index({ categories }) {
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
            <Categories categories={categories} />
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
