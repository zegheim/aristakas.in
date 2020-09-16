import Link from "next/link";

import Navbar from "../components/navbar";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

const ProfilePicture = ({ name, className }) => (
  <img src="/images/profile.jpg" className={className} alt={name} />
);

const Header = ({ home, name }) => (
  <header className="flex flex-col items-center">
    {home ? (
      <ProfilePicture
        name={name}
        className="w-32 h-32 rounded-full mb-4 border-tertiary border-2"
      />
    ) : (
      <>
        <Link href="/">
          <a>
            <ProfilePicture
              name={name}
              className="w-24 h-24 rounded-full mb-4 border-tertiary border-2"
            />
          </a>
        </Link>
        <Navbar />
      </>
    )}
  </header>
);

export default Header;
