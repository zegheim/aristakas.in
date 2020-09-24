import Link from "next/link";

const routeNames = ["/about", "/blog"];

const InternalLink = ({ routeName, currRoute }) => (
  <Link href={routeName}>
    <a
      className={`text-primary hover:text-accent ${
        currRoute?.startsWith(routeName)
          ? "underline font-bold"
          : "no-underline"
      }`}
    >
      {routeName.slice(1)}
    </a>
  </Link>
);

const ExternalLink = ({ href, text }) => (
  <a className="text-primary hover:text-accent" href={href}>
    {text}
  </a>
);

const Navbar = ({ home, currRoute }) => {
  const internalLinks = routeNames.map((routeName) => (
    <InternalLink key={routeName} routeName={routeName} currRoute={currRoute} />
  ));

  const externalLinks = [
    <ExternalLink
      key="contact"
      href="mailto:hello@aristakas.in"
      text="contact"
    />,
    <ExternalLink key="cv" href="/CV_Latest__LinkedIn_.pdf" text="cv" />,
  ];
  const allLinks = [...internalLinks, ...externalLinks];

  return (
    <div className={`w-full flex justify-center ${home ? "" : "mb-6"}`}>
      <navbar className="text-primary">
        {allLinks.reduce((prev, curr) => [prev, " / ", curr])}
      </navbar>
    </div>
  );
};

export default Navbar;
