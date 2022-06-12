import { btnClass } from "./buttonStyles";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={btnClass()}>
      {text}
    </button>
  );
};

export default Button;
