import "./styles.css";
import CV from "./assets/CV.png";
import GitHub from "./assets/GitHub.png";
import Gmail from "./assets/Gmail.png";
import Linkedin from "./assets/Linkedin.png";

function socialMedia() {
  return (
  <div className="social-media-container">
    <a href="https://github.com/Bielzera28" target="_blank" className="social-media-item" rel="noreferrer">
      <img alt="GitHub" src={GitHub} width={35} />
    </a>

    <a href="https://www.linkedin.com/in/gabriel-aguiar-queiroz-788a79243/" target="_blank" className="social-media-item" rel="noreferrer">
      <img alt="Linkedin" src={Linkedin} width={28} />
    </a>

    <a href="aguiar.desenvolvedor@gmail.com" target="_blank" className="social-media-item" rel="noreferrer">
      <img alt="Gmail" src={Gmail} width={33} />
    </a>

    <a href="#" className="social-media-item" rel="noreferrer">
      <img alt="CV" src={CV} width={27} />
    </a>
  </div>
  )
}

export default socialMedia;
