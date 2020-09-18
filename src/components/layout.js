import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Header from "./header.js";

const name = "Justin Arista Kasin";
const siteTitle = "Justin Arista Kasin";

const Layout = ({ children, home, pageName }) => {
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
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{`${pageName} | ${siteTitle}`}</title>
      </Head>
      <div className="container">
        <Header name={name} home={home} currRoute={router.pathname} />
        <main>{children}</main>
        {!home && (
          <div className="mt-12 mx-0 mb-0 text-primary">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
export { siteTitle };
