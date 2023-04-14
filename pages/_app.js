import "@/styles/globals.css";
import Layout from "../components/layout";
import NavBarVertical from "../components/navbar";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <NavBarVertical>
        <Component {...pageProps} />
      </NavBarVertical>
    </Layout>
  );
}
