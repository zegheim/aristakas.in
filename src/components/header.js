import Link from "next/link";
import Img from "react-optimized-image";
import Profile from "../../public/images/profile.jpg";
import Navbar from "../components/navbar";

const ProfilePicture = ({ name, className }) => (
  <Img webp src={Profile} className={className} alt={name} sizes={[320, 640]} />
);

const Header = ({ home, name, currRoute }) => (
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
        <Navbar currRoute={currRoute} />
      </>
    )}
  </header>
);

export default Header;
