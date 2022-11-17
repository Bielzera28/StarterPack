import Heading from "../Heading";
import Text from "../Text";

import "./styles.scss";

function certificate({imageUrl , title , subTitle , autheticationCode, link}) {
  return (
  <a className="certificate-container" href={link} target="_blank" rel="noreferrer">
    <img alt={title} src={imageUrl} />

    <div className="certificate-right">
      <Heading color="#5CFF9B" fontFamily="Azonix Regular" fontSize={17}>{title}</Heading>
      <Heading fontWeight={400} fontSize={15}>{subTitle}</Heading>
      <Text fontSize={12}>{autheticationCode}</Text>
    </div>
  </a>
  )
}

export default certificate;
