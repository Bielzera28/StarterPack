import "./styles.css";
import LogoImagem from "./Imagens/front-academy-logo.png";

function Logo() {
  return (
    <div class="logo">
      <img alt="Logo Front Academy" class="logo" src={LogoImagem} />
    </div>
  );
}

export default Logo;
