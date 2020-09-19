import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";
import Date from "../../src/components/date";
import Layout from "../../src/components/layout";
import Tag from "../../src/components/tag";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../src/lib/api";

const PostHeader = ({ title, coverImage, date, tags }) => (
  <div className="font-mono text-primary mb-4 flex flex-col space-y-1">
    <h1 className="font-black tracking-tighter text-xl leading-tight">
      {title}
    </h1>
    <div className="font-light">
      <Date dateString={date} />
    </div>
    <div className="flex space-x-1 font-sans">
      {tags.map((tag) => (
        <Tag key={tag.name} name={tag.name} />
      ))}
    </div>
  </div>
);

const PostBody = ({ content }) => (
  <div className="text-justify text-primary leading-tight">
    {documentToReactComponents(content)}
  </div>
);

const Post = ({ post }) => (
  <Layout pageName={post.title} blogPost>
    <article className="px-4">
      <Head>
        <meta property="og:image" content={post.coverImage.url} />
      </Head>
      <PostHeader
        title={post.title}
        date={post.created_at}
        coverImage={post.coverImage}
        tags={post.tags}
      />
      <PostBody content={post.content} />
    </article>
  </Layout>
);

const getStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: false,
  };
};

const getStaticProps = async ({ params }) => {
  const data = await getPostAndMorePosts(params.slug);
  return {
    props: {
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
};

export { getStaticPaths, getStaticProps };
export default Post;
