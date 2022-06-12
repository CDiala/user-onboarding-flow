import Stepper from "../shared/Stepper";
import { stepCount } from "../../data/stepperCount";
import { stepperControlContainerStyle } from "./stepperControlStyles";

const StepperControl = ({ count }) => {
  return (
    <div className={stepperControlContainerStyle()}>
      {stepCount.map((step) => {
        return (
          <Stepper
            key={step}
            isActive={step <= count + 1}
            step={step}
            length={stepCount.length}
          />
        );
      })}
    </div>
  );
};

export default StepperControl;
