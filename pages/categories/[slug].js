import axios from "axios";

import Packages from "../../components/Packages";
import App from "../../layouts/App";

export async function getStaticProps(context) {
  const { params } = context;

  async function getCategory() {
    let config = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/categories?slug=${params.slug}`,
      header: {
        "Content-Type": "appliction/json",
      },
    };

    const response = await axios(config);

    return response.data[0];
  }

  const category = await getCategory();

  return {
    props: {
      category,
    },
  };
}

export async function getStaticPaths() {
  async function getCategoriesPaths() {
    let config = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/categories`,
      header: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios(config);
    return res.data;
  }
  const categories = await getCategoriesPaths();
  const paths = categories.map((c) => ({
    params: { slug: c.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

function category({ category }) {
  return (
    <App>
      {/* <!-- Page Content --> */}
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{category.title}</h1>
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
            <Packages packages={category.packages} />
          </div>

          <br />
          <br />

          {/* <Pagination /> */}

          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </App>
  );
}

export default category;
