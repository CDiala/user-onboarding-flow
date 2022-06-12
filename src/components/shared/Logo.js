import eden from "../../assets/eden.png";
import { cardTitleStyle, logoContainerStyle } from "./logoStyle";

const AppLogo = () => {
  return (
    <header className={logoContainerStyle()}>
      <img src={eden} alt="company logo" />
      <h1 className={cardTitleStyle()}>Eden</h1>
    </header>
  );
};

export default AppLogo;
