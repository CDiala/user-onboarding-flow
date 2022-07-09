import { circleStyle, stepperLineStyle, stepperStyle } from "./stepperStyles";
import React from "react";
import { setElementsStyle } from "../../utils/toggleClass";
import { stepArray } from "../../data/stepperCount";

// stepper line
const Line = ({ isActive }) => {
  return <div className={`${stepperLineStyle(isActive)}`}></div>;
};

// stepper circle
const Circle = ({ isActive, step, setCount }) => {
  return (
    <div
      className={`${circleStyle(isActive)}`}
      onClick={(e) => {
        let parentId = e.target.parentElement.id[stepArray.length];
        if (
          Object.values(e.target.classList).includes("bg-active") &&
          parentId < stepArray.length
        ) {
          e.stopPropagation();
          let loopStart = Number(parentId) + 1;
          for (let i = loopStart; i <= stepArray.length; i++) {
            setElementsStyle(
              `Step${i}`,
              ["bg-active", "border-active", "text-white"],
              ["bg-white", "border-inactive", "text-black"]
            );
          }
          setCount(parentId - 1);
        }
      }}
    >
      {step}
    </div>
  );
};

// stepper unit
export const Stepper = ({ isActive, step, length, id, setCount }) => {
  return (
    <div id={id} className={`${stepperStyle(length, step)}`}>
      {step > 1 && <Line isActive={isActive} />}
      <Circle isActive={isActive} step={step} setCount={setCount} />
      {step < length && <Line isActive={isActive} />}
    </div>
  );
};

export default Stepper;
