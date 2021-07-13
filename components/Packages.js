import Link from "next/link";
import Star from "./Star";

function Packages({ packages }) {
  return packages.map((p) => (
    <div className="col-md-4" key={p.id}>
      <div className="service-item">
        <img
          src={
            p.image
              ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${p.image.url}`
              : "/assets/images/720x480.png"
          }
          alt=""
        />
        <div className="down-content">
          <h4>{p.title}</h4>
          <div style={{ marginBottom: "10px" }}>
            <span>
              <i className="fa fa-calendar text-accent" aria-hidden="true"></i>{" "}
              {p.duration}{" "}
            </span>
          </div>

          <p>{p.excerpt}</p>

          <div className="row justify-content-between align-items-center text-accent">
            <div className="col">
              <Star value={p.rating} />
            </div>
            <div className="col d-flex justify-content-around">
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <hr />
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <Link href="/packages/[slug]" as={`/packages/${p.slug}`}>
                <a className="filled-button">Book</a>
              </Link>
            </div>
            <div className="col text-right ">
              <strong>
                {p.price ? `₹ ${p.price} /- P.P` : "Ask For Price"}
              </strong>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  ));
}

export default Packages;
