import React from "react";
import liff from "@line/liff";
import Link from "next/link";
import Layout from "../components/Layout";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

const IndexPage = () => {
  React.useEffect(() => {
    liff.init({ liffId: serverRuntimeConfig.liffID });
  }, []);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
