import Card from "../../../Components/Card";
import LastProjects from "../LastProjects";
import Tecnologies from "../Tecnologies";
import UserProfile from "../UserProfile";


import "./styles.css";

function CenterContent() {
  return (
  <div className="center-content__container">
    <div className="center-content__container__left">
        <UserProfile />
    </div>

    <div className="center-content__container__right">
        <Tecnologies />
        <LastProjects />
        <Card>Card 3</Card>
    </div>
  </div>
  )
}

export default CenterContent;
