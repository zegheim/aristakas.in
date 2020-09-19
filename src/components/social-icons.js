import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcons = () => (
  <div className="text-xl flex space-x-3">
    <a aria-label="My GitHub Account" href="https://github.com/zegheim">
      <FontAwesomeIcon icon={faGithubSquare} title="My GitHub Account" />
    </a>
    <a
      aria-label="My LinkedIn Account"
      href="https://linkedin.com/in/justinarista"
    >
      <FontAwesomeIcon icon={faLinkedin} title="My LinkedIn Account" />
    </a>
  </div>
);

export default SocialIcons;
