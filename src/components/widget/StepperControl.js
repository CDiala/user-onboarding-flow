import Stepper from "../shared/Stepper";
import { stepCount } from "../../data/stepperCount";

const StepperControl = ({ count }) => {
  return (
    <div className="flex justify-center max-w-88.5">
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
