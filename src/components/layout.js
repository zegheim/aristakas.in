import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import BackButton from "./back-button";
import Header from "./header.js";

const name = "Justin Arista Kasin";
const siteTitle = "Justin Arista Kasin";

const Layout = ({ children, home, blogPost, pageName }) => {
  const router = useRouter();

  return (
    <div
      className={`min-h-screen min-w-screen flex flex-col ${
        home ? "justify-center" : "justify-start"
      }`}
    >
      <Head>
        <meta name="description" content="Justin's personal website and blog" />
        <meta name="og:title" content={siteTitle} />
        <title>{`${pageName} | ${siteTitle}`}</title>
      </Head>
      <div className="container">
        <Header name={name} home={home} currRoute={router.pathname} />
        <main>{children}</main>
        {!home && <BackButton blogPost={blogPost} />}
      </div>
    </div>
  );
};

export default Layout;
