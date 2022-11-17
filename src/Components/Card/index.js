import "./styles.scss";

function card({children, height, paddingBottom = 15}) {
  return (
  <div className="card-container" style={{ height , paddingBottom }}>
    { children }
  </div>
  )
}

export default card;
