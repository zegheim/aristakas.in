import Head from "next/head";
import Link from "next/link";

import Date from "../src/components/date";
import Layout, { siteTitle } from "../src/components/layout";
import Navbar from "../src/components/navbar";
import SocialIcons from "../src/components/social-icons";
import { getSortedPostsData } from "../src/lib/posts";

const IndexPage = ({ allPostsData }) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className="text-primary text-center px-4">
      <div className="inline-block">
        <h1 className="text-2xl font-mono leading-none mb-4 overflow-hidden border-r-2 border-primary whitespace-no-wrap mx-auto animate-typing">
          Hello, I'm <span className="font-black">Justin</span>.
        </h1>
      </div>
      <p>I am currently a Software Engineer at J.P. Morgan, based in London.</p>
      <p>Views expressed are my own.</p>
    </section>
    <section className="text-primary mt-16 flex flex-col items-center">
      <Navbar home />
      <SocialIcons />
    </section>
  </Layout>
);

const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
};

export { getStaticProps };
export default IndexPage;
