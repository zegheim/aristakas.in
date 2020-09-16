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
      <h1 className="text-2xl font-mono tracking-tighter mb-4">
        Hello, I'm <strong>Justin</strong>.
      </h1>
      <p>I am currently a Software Engineer at J.P. Morgan, based in London.</p>
      <p>Views expressed are my own.</p>
    </section>
    <section className="text-primary mt-16 flex flex-col items-center">
      <Navbar home />
      <SocialIcons />
    </section>
    {/* <section className="text-base leading-normal pt-px">
      <h2 className="text-lg font-bold leading-snug my-4 mx-0">Blog</h2>
      <ul className="list-none p-0 m-0">
        {allPostsData.map(({ id, date, title }) => (
          <li className="mt-0 mx-0 mb-5" key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className="text-gray-500">
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section> */}
  </Layout>
);

const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
};

export { getStaticProps };
export default IndexPage;
