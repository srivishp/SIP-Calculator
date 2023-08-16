import "../Button/Button.css";

const Button = (props) => {
  return (
    <p className="actions">
      <button onClick={props.reset} type="reset" className="buttonAlt">
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  );
};

export default Button;
