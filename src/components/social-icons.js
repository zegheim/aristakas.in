import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => (
  <div className="text-xl">
    <a href="https://github.com/zegheim">
      <FontAwesomeIcon icon={faGithubSquare} className="mr-3" />
    </a>
    <a href="https://linkedin.com/in/justinarista">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </div>
);

export default SocialIcons;
