import Head from "next/head";
import Link from "next/link";

import Date from "../src/components/date";
import Layout, { siteTitle } from "../src/components/layout";
import { getSortedPostsData } from "../src/lib/posts";

const IndexPage = ({ allPostsData }) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className="text-base leading-normal">
      <p>Hello, I'm Justin.</p>
      <p>
        (This is a sample website - you’ll be building a site like this on{" "}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
    </section>
    <section className="text-base leading-normal pt-px">
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
    </section>
  </Layout>
);

const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
};

export { getStaticProps };
export default IndexPage;
