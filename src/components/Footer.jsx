import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* <div className="footer-logo"> */}
            {/* <span className="logo-bracket">&lt;</span> */}
            {/* Sindhu Kodaboina */}
            {/* <span className="logo-bracket"> /&gt;</span> */}
          {/* </div> */}
          <div className="footer-socials">
            <a href="https://github.com/K-Sindhu17" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sindhu-kodaboina/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:sindhukodaboina2002@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          <p className="footer-text">
            Made with <FaHeart className="heart" /> by Sindhu Kodaboina
          </p>
          <p className="footer-copy">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
