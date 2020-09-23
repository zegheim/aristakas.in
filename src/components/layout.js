import { useRouter } from "next/router";
import BackButton from "./back-button";
import Header from "./header";
import Meta from "./meta";

const Layout = ({
  children,
  home,
  blogPost,
  pageName,
  pageDescription,
  coverImage,
}) => {
  const router = useRouter();

  return (
    <div
      className={`min-h-screen min-w-screen flex flex-col ${
        home ? "justify-center" : "justify-start"
      }`}
    >
      <Meta
        blogPost={blogPost}
        coverImage={coverImage}
        pageName={pageName}
        pageDescription={pageDescription}
      />
      <div className="container">
        <Header home={home} currRoute={router.pathname} />
        <main>{children}</main>
        {!home && <BackButton blogPost={blogPost} />}
      </div>
    </div>
  );
};

export default Layout;
