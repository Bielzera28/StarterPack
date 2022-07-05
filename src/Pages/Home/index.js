import Logo from "../../Components/Logo/index";
import Text from "../../Components/Text/index";
import CenterContent from "./CenterContent";
import "./styles.css";


function Home() {
  return (
     <div className="home-container">
         <div className="home-container__content">
            <div>
            
            </div>

           <CenterContent />

            <div className="home-container__content__bottom">
               <Text color="#ffffff">Powered By</Text>

               <div className="logo-container">
                  <Logo />
               </div>
            </div>
                 
         </div>
     </div>
  )

}

export default Home;