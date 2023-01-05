import Card from "../../../Components/Card";
import CSS3 from "./assets/CSS3.png";
import Git from "./assets/Git.png";
import Heading from "../../../Components/Heading";
import HTML5 from "./assets/HTML5.png";
import JavaScript from "./assets/JavaScript.png";
import ReactImage from "./assets/React.png";
import SASS from "./assets/SASS.png";

import "./styles.scss";

function Tecnologies({children}) {
  return (
  <Card>
   <div className="tecnologies-container">
    <div className="tecnologies-heading">
     <Heading fontSize={24} fontWeight={600}>Tecnologias e Frameworks</Heading>
    </div>
    <div className="tecnologies-content">
     <img alt="HTML5" src={HTML5} width={49} />
     <img alt="CSS3" src={CSS3} width={49} />
     <img alt="JavaScript" src={JavaScript} width={43} />
     <img alt="React" src={ReactImage} width={110} className="react-image"/>
     <img alt="Git" src={Git} width={40} />
     <img alt="SASS" src={SASS} width={50} />
    </div>
   </div>
  </Card>
  )
}

export default Tecnologies;
