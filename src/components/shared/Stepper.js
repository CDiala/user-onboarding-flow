import { circleStyle, stepperLineStyle, stepperStyle } from "./stepperStyles";

// stepper line
const Line = ({ isActive }) => {
  return <div className={`${stepperLineStyle(isActive)}`}></div>;
};

// stepper circle
const Circle = ({ isActive, step }) => {
  return <div className={`${circleStyle(isActive)}`}>{step}</div>;
};

// stepper unit
export const Stepper = ({ isActive, step, length, onClick }) => {
  return (
    <div className={`${stepperStyle(length, step)}`}>
      {step > 1 && <Line isActive={isActive} />}

      <Circle isActive={isActive} step={step} />

      {step < length && <Line isActive={isActive} />}
    </div>
  );
};

export default Stepper;
