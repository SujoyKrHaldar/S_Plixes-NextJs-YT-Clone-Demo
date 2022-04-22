import Head from "next/head";
import Landing from "../components/home/Landing";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>S-flix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
      </Layout>
    </>
  );
}
