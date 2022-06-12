import {
  cardContainerStyle,
  cardImageStyle,
  headerStyle,
  paragraphStyle,
  textStyle,
} from "./cardStyles";

const Card = ({ img, text, id, onClick }) => {
  return (
    <div id={id} onClick={onClick} className={cardContainerStyle()}>
      <img className={cardImageStyle()} src={img} alt="card icon" />
      <div className={textStyle()}>
        <h3 className={headerStyle()}>{text[0]}</h3>
        <p className={paragraphStyle()}>{text[1]}</p>
      </div>
    </div>
  );
};

export default Card;
