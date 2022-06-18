import Stepper from "../shared/Stepper";
import { stepperControlContainerStyle } from "./stepperControlStyles";

const StepperControl = ({ count, stepCount, setCount }) => {
  return (
    <div className={stepperControlContainerStyle()}>
      {stepCount.map((step) => {
        return (
          <Stepper
            key={step}
            id={`Step${step}`}
            isActive={step <= count + 1}
            step={step}
            length={stepCount.length}
            setCount={setCount}
          />
        );
      })}
    </div>
  );
};

export default StepperControl;
