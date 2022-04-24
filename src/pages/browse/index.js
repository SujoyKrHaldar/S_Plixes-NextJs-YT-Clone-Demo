import Head from "next/head";
import { getData } from "../../../api/getVideoData";
import Main from "../../components/browse/Main";
import Layout from "../../components/layout/Layout";

export const getServerSideProps = async () => {
  const data = await getData();
  return {
    props: { data },
  };
};

function index({ data }) {
  return (
    <>
      <Head>
        <title>Browse all videos</title>
        <meta
          name="description"
          content="A video streaming app using nextjs and many more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Main data={data} />
      </Layout>
    </>
  );
}

export default index;
