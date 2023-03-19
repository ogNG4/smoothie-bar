import "@/styles/globals.scss";

import Layout from "@/components/ui/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
