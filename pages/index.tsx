import React from "react";
import Link from "next/link";
// import liff from "@line/liff";
import Layout from "../components/Layout";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const IndexPage = () => {
  const ctxRef = React.useRef(null);
  React.useEffect(() => {
    // console.log(liff.getContext());
    import("@line/liff").then((liff) => {
      console.log("process.browser", process.browser);
      // console.log(liff);
      console.log(publicRuntimeConfig);
      // @ts-ignore
      ctxRef.current = liff.getContext();
      // @ts-ignore
      liff.init({ liffId: publicRuntimeConfig.liffID });
    });
  }, []);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      {JSON.stringify(ctxRef.current)}
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
