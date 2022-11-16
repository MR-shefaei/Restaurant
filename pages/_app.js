import Footer from "../components/footer";
import Header from "../components/header";
import Content from "../components/content";
import { API_URL } from "../config";
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
