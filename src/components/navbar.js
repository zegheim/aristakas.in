import Link from "next/link";

const routeNames = ["/about", "/blog", "/contact", "/cv"];

const RouteLink = ({ routeName, currRoute }) => (
  <Link href={routeName}>
    <a className={`${currRoute === routeName ? "underline font-bold" : ""}`}>
      {routeName.slice(1)}
    </a>
  </Link>
);

const Navbar = ({ home, currRoute }) => {
  return (
    <div className={`w-full flex justify-center ${home ? "mb-2" : "mb-6"}`}>
      <navbar className="text-primary">
        {routeNames
          .map((routeName) => (
            <RouteLink routeName={routeName} currRoute={currRoute} />
          ))
          .reduce((prev, curr) => [prev, " / ", curr])}
      </navbar>
    </div>
  );
};

export default Navbar;
