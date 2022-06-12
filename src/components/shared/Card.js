import setElementClass from "../../utils/toggleClass";
import {
  cardContainerStyle,
  cardImageStyle,
  headerStyle,
  paragraphStyle,
  textStyle,
} from "./cardStyles";

const Card = ({ img, text, id }) => {
  return (
    <div
      id={id}
      onClick={(e) => {
        console.log(e);
        setElementClass(
          "inputContainer",
          e.target.id ||
            e.target.parentElement.id ||
            e.target.parentElement.parentElement.id,
          "border-active"
        );
      }}
      className={cardContainerStyle()}
    >
      <img className={cardImageStyle()} src={img} alt="card icon" />
      <div className={textStyle()}>
        <h3 className={headerStyle()}>{text[0]}</h3>
        <p className={paragraphStyle()}>{text[1]}</p>
      </div>
    </div>
  );
};

export default Card;
