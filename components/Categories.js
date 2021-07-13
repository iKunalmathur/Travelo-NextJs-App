import Link from "next/link";

function Categories({ categories }) {
  return categories.map((c) => (
    <div className="col-md-4" key={c.id}>
      <div className="service-item">
        <img
          src={
            c.image
              ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${c.image.url}`
              : "/assets/images/720x480.png"
          }
          alt=""
        />
        <div className="down-content">
          <h4>{c.title}</h4>
          <hr />
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <Link href="/categories/[slug]" as={`/categories/${c.slug}`}>
                <a className="filled-button">Explore</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  ));
}

export default Categories;
