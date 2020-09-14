import Link from "next/link";

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
      <>
        <ProfilePicture name={name} className="w-32 h-32 rounded-full" />
        <h1 className="text-2xl leading-tight font-extrabold tracking-tighter my-4 mx-0">
          {name}
        </h1>
      </>
    ) : (
      <>
        <Link href="/">
          <a>
            <ProfilePicture name={name} className="w-24 h-24 rounded-full" />
          </a>
        </Link>
        <h2 className="text-lg font-bold leading-snug my-4 mx-0">
          <Link href="/">
            <a className="text-inherit">{name}</a>
          </Link>
        </h2>
      </>
    )}
  </header>
);

export default Header;
