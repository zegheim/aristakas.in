import Link from "next/link";
import Img from "react-optimized-image";
import Profile from "../../public/images/profile.jpg";
import Navbar from "../components/navbar";

const ProfilePicture = ({ className }) => (
  <Img
    webp
    src={Profile}
    className={className}
    alt="Justin Arista Kasin"
    sizes={[480, 640, 768, 1024, 1280]}
  />
);

const Header = ({ home, currRoute }) => (
  <header className="flex flex-col items-center">
    {home ? (
      <ProfilePicture className="w-32 h-32 rounded-full mb-4 border-tertiary border-2" />
    ) : (
      <>
        <Link href="/">
          <a>
            <ProfilePicture className="w-24 h-24 rounded-full mb-4 border-tertiary border-2" />
          </a>
        </Link>
        <Navbar currRoute={currRoute} />
      </>
    )}
  </header>
);

export default Header;
