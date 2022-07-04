import "./styles.css";

function card({children}) {
  return (
  <div className="card-container">
    { children }
  </div>
  )
}

export default card;
