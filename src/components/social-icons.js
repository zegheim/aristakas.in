import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => (
  <div className="text-xl flex space-x-3">
    <a href="https://github.com/zegheim">
      <FontAwesomeIcon icon={faGithubSquare} />
    </a>
    <a href="https://linkedin.com/in/justinarista">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </div>
);

export default SocialIcons;
