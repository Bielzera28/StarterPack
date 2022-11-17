function heading({children , color , fontSize , fontWeight, fontFamily}) {
  return (
  <div style ={{color, fontSize, fontWeight, fontFamily}}>
    { children }
  </div>
  )
}

export default heading;
