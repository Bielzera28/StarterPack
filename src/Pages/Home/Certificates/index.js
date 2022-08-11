import Card from "../../../Components/Card";
import Heading from "../../../Components/Heading";
import Certificate from "../../../Components/Certificate";
import photoStarterPack from "./assets/StarterPack.png";
import ccStarterPack from "./assets/Certificado_StarterPack.pdf";
import photoUdemy from "./assets/udemy.png";
import ccSass from "./assets/Certificado_SASS.pdf";

import "./styles.css";

function Certificates() {
  return (
    <Card>
      <div className="certificates_container">
        <div className="certificates_heading">
          <Heading fontSize={24} fontWeight={600}>
            Certificados
          </Heading>
          <Heading color="#6A6A6A" fontSize={16} fontWeight={600}>
            VER TODOS
          </Heading>
        </div>

        <div className="certificates-wrapper">
          <div className="certificates_content">
            <Certificate
              autheticationCode="Conclusão : 05/07/2022"
              imageUrl={photoStarterPack}
              link={ccStarterPack}
              title="Starter Pack"
              subTitle="Front Academy, 2022"
            />

            <Certificate
              autheticationCode="Conclusão : 11/08/2022"
              imageUrl={photoUdemy}
              link={ccSass}
              title="SASS e SCSS"
              subTitle="Udemy, 2022"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Certificates;
