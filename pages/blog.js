import BlogCard from "../src/components/blog-card";
import Layout from "../src/components/layout";
import { getAllPosts } from "../src/lib/api";

const BlogPage = ({ allPosts }) => {
  return (
    <Layout pageName="Blog">
      <div className="flex flex-col items-center space-y-4">
        {allPosts.map(
          ({ id, title, feature_image, published_at, slug, tags }) => (
            <BlogCard
              key={id}
              coverImage={feature_image}
              slug={slug}
              date={published_at}
              title={title}
              tags={tags}
            />
          )
        )}
      </div>
    </Layout>
  );
};

const getStaticProps = async () => {
  const allPosts = await getAllPosts();
  return { props: { allPosts } };
};

export { getStaticProps };
export default BlogPage;
