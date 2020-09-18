import Head from "next/head";

import Date from "../../src/components/date";
import Layout from "../../src/components/layout";
import { getAllPostIds, getPostData } from "../../src/lib/posts";

const Post = ({ postData }) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <h1 className="text-xl leading-tight font-extrabold tracking-tighter mx-0 my-4">
      {postData.title}
    </h1>
    <div className="text-gray-500">
      <Date dateString={postData.date} />
    </div>
    <br />
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Layout>
);

const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return { paths, fallback: false };
};

const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return { props: { postData } };
};

export default Post;
export { getStaticPaths, getStaticProps };
