import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";

export default function app({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
