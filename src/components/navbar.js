import Link from "next/link";
const Navbar = ({ home }) => (
  <div className={`w-full flex justify-center ${home ? "mb-2" : "mb-6"}`}>
    <navbar className="text-primary">
      <Link href="/about">
        <a>about</a>
      </Link>{" "}
      /{" "}
      <Link href="/blog">
        <a>blog</a>
      </Link>{" "}
      /{" "}
      <Link href="/contact">
        <a>contact</a>
      </Link>{" "}
      / <a>cv</a>
    </navbar>
  </div>
);

export default Navbar;
