import Link from "next/link";

const BackButton = ({ blogPost }) => (
  <div className="mt-12 mx-0 mb-0">
    <Link href={blogPost ? "/blog" : "/"}>
      <a className="hover:text-accent text-primary">{`← Back to ${
        blogPost ? "blog list" : "home"
      }`}</a>
    </Link>
  </div>
);

export default BackButton;
