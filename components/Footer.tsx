import {
  faDiscord,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerBg from "/images/footer/footer-bg.png";
const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url(${footerBg.src})` }}>
      <div className="container">
        <div className="social">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          <FontAwesomeIcon icon={faTwitter} className="icon" />
          <FontAwesomeIcon icon={faDiscord} className="icon" />
          <FontAwesomeIcon icon={faYoutube} className="icon" />
        </div>
        <div className="privacy">
          <p>Privacy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
