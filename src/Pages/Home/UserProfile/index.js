import Card from "../../../Components/Card";
import Gmail from "../../../Components/Icons/Gmail";
import Heading from "../../../Components/Heading";
import Pin from "../../../Components/Icons/Pin";
import SocialMedia from "../../../Components/SocialMedia";
import Telefone from "../../../Components/Icons/Telefone";
import Text from "../../../Components/Text";
import UserImage from "../../../Components/UserImage";

import "./styles.css";

export default function UserProfile() {
  return (
    <Card height="100%">
      <div className="user-image__container">
        <UserImage />
      </div>

      <div className="center-content__container__left__content">
        <div className="espacamento">
          <Heading fontSize={28} fontWeight={600}>
            Gabriel Aguiar Queiroz
          </Heading>

          <Heading fontSize={20} color="#5DB9FA">
            Junior, 3 meses de experiência
          </Heading>
        </div>

        <p>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
            amet, consectetur.
          </Text>
        </p>

        <div>
          <div className="user-info">
            <div className="user-info__content">
              <div className="user-info__content__container">
                <Pin size={11} />
              </div>
              <Text color="#ACACAC">Brasília, DF - Brasil</Text>
            </div>

            <div className="user-info__content">
              <div className="user-info__content__container">
                <Gmail size={10} />
              </div>
              <Text color="#ACACAC">aguiar.desenvolvedor@gmail.com</Text>
            </div>

            <div className="user-info__content">
              <div className="user-info__content__container">
                <Telefone size={15} />
              </div>
              <Text color="#ACACAC">+55 61 98291-1393</Text>
            </div>
          </div>

          <SocialMedia />
        </div>
      </div>
    </Card>
  );
}
