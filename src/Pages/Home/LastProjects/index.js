import Card from "../../../Components/Card";
import FrontAcademy from "./assets/Frontacademy.png";
import Heading from "../../../Components/Heading";
import Project from "../../../Components/Project";

import "./styles.css";

function LastProjects() {
  return (
    <Card paddingBottom={15}>
      <div className="last-projects_container">
        <div className="last-projects_heading">
          <Heading fontSize={24} fontWeight={600}>
            Últimos Projetos
          </Heading>
          <Heading color="#6A6A6A" fontSize={16} fontWeight={600}>
            VER TODOS
          </Heading>
        </div>

        <div className="last-projects_wrapper">
          <div className="last-projects_content">
            <Project
              imageUrl={FrontAcademy}
              link="https://www.frontacademy.com.br/starter-pack/"
              title="Starter Pack - Aprendizado"
            />

            <Project
              imageUrl={FrontAcademy}
              link="https://www.frontacademy.com.br/starter-pack/"
              title="Starter Pack - Aprendizado"
            />

            <Project
              imageUrl={FrontAcademy}
              link="https://www.frontacademy.com.br/starter-pack/"
              title="Starter Pack - Aprendizado"
            />
            
          </div>
        </div>
      </div>
    </Card>
  );
}

export default LastProjects;
