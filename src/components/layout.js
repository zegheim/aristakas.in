import Head from "next/head";
import { useRouter } from "next/router";
import BackButton from "./back-button";
import Header from "./header.js";

const siteTitle = "Justin Arista Kasin";
const defaultDescription = "Justin's personal website and blog";

const Layout = ({ children, home, blogPost, pageName, pageDescription }) => {
  const router = useRouter();

  return (
    <div
      className={`min-h-screen min-w-screen flex flex-col ${
        home ? "justify-center" : "justify-start"
      }`}
    >
      <Head>
        <meta
          name="description"
          content={blogPost ? pageDescription : defaultDescription}
        />
        <meta name="og:title" content={`${pageName} | ${siteTitle}`} />
        <title>{`${pageName} | ${siteTitle}`}</title>
      </Head>
      <div className="container">
        <Header home={home} currRoute={router.pathname} />
        <main>{children}</main>
        {!home && <BackButton blogPost={blogPost} />}
      </div>
    </div>
  );
};

export default Layout;
