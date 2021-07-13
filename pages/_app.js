import "bootstrap/dist/css/bootstrap.css";
import "../styles/fontawesome.css";
import "../styles/flex-slider.css";
import "../styles/owl.css";
import "../styles/style.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
