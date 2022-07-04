import "./styles.css";

function heading({children , color , fontSize , fontWeight}) {
  return (
  <div style ={{color, fontSize, fontWeight}}>
    { children }
  </div>
  )
}

export default heading;
