import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import buildCloudinaryUrl from "../lib/url";

const ProfilePicture = ({ className, width, height, imageName }) => (
  <div className={className}>
    <Image
      src={buildCloudinaryUrl(imageName)}
      alt="Justin Arista Kasin"
      className={className}
      width={width}
      height={height}
      unoptimized={true}
    />
  </div>
);

const Header = ({ home, currRoute }) => (
  <header className="flex flex-col items-center">
    {home ? (
      <>
        <ProfilePicture
          imageName="profile.jpg"
          className="rounded-full w-32 h-32 mb-4 border-tertiary border"
          width={128}
          height={128}
        />
      </>
    ) : (
      <>
        <Link href="/">
          <a>
            <ProfilePicture
              imageName="profile.jpg"
              className="hover:shadow-lg w-24 h-24 rounded-full mb-4 border-tertiary border"
              width={96}
              height={96}
            />
          </a>
        </Link>
        <Navbar currRoute={currRoute} />
      </>
    )}
  </header>
);

export default Header;
