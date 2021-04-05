import Date from "../../src/components/date";
import Layout from "../../src/components/layout";
import Tag from "../../src/components/tag";
import { getAllPosts, getSinglePost } from "../../src/lib/api";

const PostHeader = ({ title, coverImage, date, tags }) => (
  <>
    <div className="text-primary mb-4 flex flex-col space-y-2">
      <h1 className="font-semibold text-4xl leading-none">{title}</h1>
      <div className="font-light">
        <Date dateString={date} />
      </div>
      <div className="flex space-x-1 font-sans">
        {tags.map((tag) => (
          <Tag key={tag.id} name={tag.name} blogPost />
        ))}
      </div>
    </div>
    <img
      src={coverImage}
      alt={`Cover image for ${title}`}
      className="shadow min-h-full min-w-full mb-4"
    />
  </>
);

const PostBody = ({ content }) => (
  <div
    className="text-justify text-primary leading-tight"
    dangerouslySetInnerHTML={{ __html: content }}
  ></div>
);

const Post = ({ post }) => (
  <Layout
    blogPost
    pageName={post.title}
    pageDescription={post.excerpt}
    coverImage={post.feature_image}
  >
    <article className="px-4">
      <PostHeader
        title={post.title}
        date={post.created_at}
        coverImage={post.feature_image}
        tags={post.tags}
      />
      <PostBody content={post.html} />
    </article>
  </Layout>
);

const getStaticPaths = async () => {
  const allPosts = await getAllPosts("slug");
  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: false,
  };
};

const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: {
      post: post,
    },
  };
};

export { getStaticPaths, getStaticProps };
export default Post;
