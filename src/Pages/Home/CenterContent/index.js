import Certificates from "../Certificates";
import LastProjects from "../LastProjects";
import Tecnologies from "../Tecnologies";
import UserProfile from "../UserProfile";


import "./styles.css";

function CenterContent() {
  return (
  <div className="center-content__container">
    <div className="center-content__container__left">
        <UserProfile height={100} />
    </div>

    <div className="center-content__container__right">
        <Tecnologies />
        <LastProjects />
        <Certificates />
    </div>
  </div>
  )
}

export default CenterContent;
