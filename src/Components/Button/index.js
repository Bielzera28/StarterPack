import "./styles.css";

function Button(props) {
  const children = props.children;
  const backgroundColor = props.backgroundColor;
  const borderRadius = props.borderRadius;
  const padding = props.padding;

  return (
    <button
      className="button-container"
      style={{
        backgroundColor,
        borderRadius,
        padding,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
