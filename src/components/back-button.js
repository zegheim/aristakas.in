import Link from "next/link";

const BackButton = ({ blogPost }) => (
  <div className="mt-12 mx-0 mb-0 text-primary">
    <Link href={blogPost ? "/blog" : "/"}>
      <a>{`← Back to ${blogPost ? "blog list" : "home"}`}</a>
    </Link>
  </div>
);

export default BackButton;
