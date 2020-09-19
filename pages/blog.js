import BlogCard from "../src/components/blog-card";
import Layout from "../src/components/layout";
import { getAllPostsForHome } from "../src/lib/api";

const BlogPage = ({ allPosts }) => {
  return (
    <Layout pageName="Blog">
      <div className="flex flex-col items-center space-y-4">
        {allPosts.map(({ title, coverImage, created_at, slug, tags }) => (
          <BlogCard
            key={slug}
            coverImage={coverImage}
            slug={slug}
            date={created_at}
            title={title}
            tags={tags}
          />
        ))}
      </div>
    </Layout>
  );
};

const getStaticProps = async () => {
  const allPosts = await getAllPostsForHome();
  return { props: { allPosts } };
};

export { getStaticProps };
export default BlogPage;
