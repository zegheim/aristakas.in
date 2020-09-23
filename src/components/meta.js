import Head from "next/head";

const defaultDescription = "Justin's personal website and blog";
const siteTitle = "Justin Arista Kasin";

const Meta = ({ blogPost, pageName, pageDescription, coverImage }) => (
  <Head>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <meta name="theme-color" content="#727e84" />
    <meta
      name="description"
      content={blogPost ? pageDescription : defaultDescription}
    />
    <meta name="og:title" content={`${pageName} | ${siteTitle}`} />
    <meta property="og:image" content={coverImage} />
    <title>{`${pageName} | ${siteTitle}`}</title>
  </Head>
);

export default Meta;
