import Card from "../../../Components/Card";
import Heading from "../../../Components/Heading";
import Certificate from "../../../Components/Certificate";
import StarterPack from "./assets/StarterPack.png";

import "./styles.css";

function Certificates () {
  return (
  <Card>
   <div className="certificates_container">
    <div className="certificates_heading">
     <Heading fontSize={24} fontWeight={600}>Certificados</Heading>
     <Heading color="#6A6A6A" fontSize={16} fontWeight={600}>VER TODOS</Heading>
    </div>

    <div className="certificates_content">
     <Certificate 
     autheticationCode="123456789#g"
     imageUrl={StarterPack}
     link="https://www.frontacademy.com.br/starter-pack/"
     title="Starter Pack"
     subTitle="Front Academy, 2022"
     />
    </div>

   </div>
  </Card>
  )
}

export default Certificates;
