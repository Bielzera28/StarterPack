import FotoGabriel from "./assets/Gabriel_Aguiar_Queiroz.jpg";
import "./styles.scss";

function userImage() {
  return (
  <div className="user-image">
    <img alt="Gabriel Aguiar Queiroz" src={FotoGabriel} />
  </div>
  )
}

export default userImage;
