import { circleStyle, stepperLineStyle, stepperStyle } from "./stepperStyles";
import React from "react";

// stepper line
const Line = ({ isActive }) => {
  return <div className={`${stepperLineStyle(isActive)}`}></div>;
};

// stepper circle
const Circle = ({ isActive, step, count, setCount }) => {
  const newCount = (num) => {
    setCount(() => num);
  };

  return (
    <div
      className={`${circleStyle(isActive)}`}
      onClick={(e) => {
        let parentId = e.target.parentElement.id[4];
        if (
          Object.values(e.target.classList).includes("bg-active") &&
          parentId < 4
        ) {
          e.stopPropagation();
          let loopStart = Number(parentId) + 1;
          for (let i = loopStart; i <= 4; i++) {
            let childList = document.getElementById(`Step${i}`).children;
            for (let child of childList) {
              child.classList.replace("bg-active", "bg-white");
              child.classList.replace("border-active", "border-inactive");
              child.classList.replace("text-white", "text-black");
            }
          }
          newCount(parentId - 1);
          localStorage.setItem("currentStep", parentId - 1);
          console.log("next:", parentId);
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
