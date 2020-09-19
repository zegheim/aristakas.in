import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = ({ label, href, icon }) => (
  <a className="text-primary" aria-label={label} href={href}>
    <FontAwesomeIcon icon={icon} title={label} />
  </a>
);

const SocialIcons = () => (
  <div className="text-xl flex space-x-3">
    <SocialIcon
      label="My GitHub Account"
      href="https://github.com/zegheim"
      icon={faGithubSquare}
    />
    <SocialIcon
      label="My LinkedIn Account"
      href="https://linkedin.com/in/justinarista"
      icon={faLinkedin}
    />
  </div>
);

export default SocialIcons;
