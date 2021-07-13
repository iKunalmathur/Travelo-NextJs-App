import Head from "next/head";
import Link from "next/link";

function Header() {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_TITLE}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css"
          integrity="sha512-XJ3ntWHl40opEiE+6dGhfK9NAKOCELrpjiBRQKtu6uJf9Pli8XY+Hikp7rlFzY4ElLSFtzjx9GGgHql7PLSeog=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      {/* <!-- ***** Preloader Start ***** --> */}
      {/* <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
      {/* <!-- ***** Preloader End ***** --> */}
      {/* <!-- Header --> */}
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xs-12">
              <ul className="left-info">
                <li>
                  <a href="#">
                    <i className="fa fa-envelope"></i>
                    {process.env.NEXT_PUBLIC_COMPANY_PHONE}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-phone"></i>
                    {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="right-icons">
                <li>
                  <a href={process.env.NEXT_PUBLIC_FACEBOOK}>
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href={process.env.NEXT_PUBLIC_TWITTER}>
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={process.env.NEXT_PUBLIC_INSTAGRAM}>
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className="">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">
              <h2>{process.env.NEXT_PUBLIC_TEXT_LOGO}</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link href="/">
                    <a className="nav-link">
                      Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/packages">
                    <a className="nav-link">Packages</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">about</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">
                    <a className="nav-link">contact</a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>

                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="about.html">
                      About Us
                    </a>
                    <a className="dropdown-item" href="testimonials.html">
                      Testimonials
                    </a>
                    <a className="dropdown-item" href="terms.html">
                      Terms
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- /Header --> */}
    </>
  );
}

export default Header;
