import Card from "../../../Components/Card";
import Heading from "../../../Components/Heading";
import Project from "../../../Components/Project";



import "./styles.css";

function LastProjects ({children}) {
  return (
  <Card>
   <div className="last-projects_container">
    <div className="last-projects_heading">
     <Heading fontSize={24} fontWeight={600}>Últimos Projetos</Heading>
     <Heading color="#6A6A6A" fontSize={16} fontWeight={600}>VER TODOS</Heading>
    </div>

    <div className="last-projects_content">
     <Project />
    </div>

   </div>
  </Card>
  )
}

export default LastProjects;
