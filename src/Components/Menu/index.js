import "./styles.css";
import Logo from "../Logo/Logo";
import Button from "../Button/button";

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu">
        <div>
          <Logo />
        </div>

        <div className="center">
          <a href="https://www.frontacademy.com.br/">

           <Button> StarterPack123</Button>
          </a>

          <Button>Evolution</Button>

          <Button>Specialist</Button>
        </div>

        <div className="right">
          <Button>Entrar</Button>

            <Button
              backgroundColor="#0289ea"
              borderRadius={8}
              padding="13px 65px"
            >
              Começar
            </Button>
         
        </div>
      </div>
    </div>
  );
}

export default Menu;
