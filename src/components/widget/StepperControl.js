import Stepper from "../shared/Stepper";
import { stepperControlContainerStyle } from "./stepperControlStyles";

const StepperControl = ({ count, stepArray, setCount }) => {
  return (
    <div className={stepperControlContainerStyle()}>
      {stepArray.map((step) => {
        return (
          <Stepper
            key={step}
            id={`Step${step}`}
            isActive={step <= count + 1}
            step={step}
            length={stepArray.length}
            setCount={setCount}
          />
        );
      })}
    </div>
  );
};

export default StepperControl;
