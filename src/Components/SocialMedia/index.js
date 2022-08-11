import "./styles.css";
import CV from "./assets/CV.png";
import GitHub from "./assets/GitHub.png";
import Gmail from "./assets/Gmail.png";
import Linkedin from "./assets/Linkedin.png";
import Curriculo from "./assets/cv.pdf";

function socialMedia() {
  return (
  <div className="social-media-container">
    <a href="https://github.com/Bielzera28" target="_blank" className="social-media-item" rel="noreferrer">
      <img alt="GitHub" src={GitHub} />
    </a>

    <a href="https://www.linkedin.com/in/gabriel-aguiar-queiroz-788a79243/" target="_blank" className="social-media-item" rel="noreferrer">
      <img alt="Linkedin" src={Linkedin}  />
    </a>

    <a href="mailto:aguiar.desenvolvedor@gmail.com" target="_blank" className="social-media-item" rel="noreferrer">
      <img alt="Gmail" src={Gmail}  />
    </a>

    <a href={Curriculo} target="_blank" className="social-media-item" rel="noreferrer">
      <img alt="CV" src={CV}  />
    </a>
  </div>
  )
}

export default socialMedia;
