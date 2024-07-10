// import "@/styles/globals.css";
import "../styles/globals.css";
import Layout from "../components/layout";
import ResumeRibbon from "../components/navbars/resume_ribbon";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* <ResumeRibbon /> */}
      <Component {...pageProps} />
    </Layout>
  );
}
