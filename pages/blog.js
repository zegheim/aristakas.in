import Link from "next/link";

import { getAllPostsForHome } from "../src/lib/api";
import Layout from "../src/components/layout";
import BlogCard from "../src/components/blog-card";

const BlogPage = ({ preview, allPosts }) => {
  return (
    <Layout pageName="Blog">
      <div className="flex flex-col items-center space-y-4">
        {allPosts.map(({ title, coverImage, date, slug, tags }) => (
          <BlogCard
            key={slug}
            coverImage={coverImage}
            slug={slug}
            date={date}
            title={title}
            tags={tags}
          />
        ))}
      </div>
    </Layout>
  );
};

const getStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);
  return { props: { preview, allPosts } };
};

export { getStaticProps };
export default BlogPage;
