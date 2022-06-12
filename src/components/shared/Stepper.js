// stepper line
const Line = ({ isActive }) => {
  return (
    <div
      className={`border ${
        isActive ? "border-active" : "border-inactive"
      } w-5 md:w-8`}
    ></div>
  );
};

// stepper circle
const Circle = ({ isActive, step }) => {
  return (
    <div
      className={`${
        isActive ? "text-white" : "text-black"
      } rounded-full border ${isActive ? "border-active" : "border-inactive"} ${
        isActive ? "bg-active" : "bg-white"
      } flex items-center justify-center cursor-pointer text-lg h-full w-10 transition-all `}
    >
      {step}
    </div>
  );
};

// stepper unit
export const Stepper = ({ isActive, step, length, onClick }) => {
  return (
    <div
      className={`flex ${
        length === step ? "justify-start" : "justify-end"
      } items-center h-10 w-19.5 md:w-26`}
    >
      {step > 1 && <Line isActive={isActive} />}
      <Circle isActive={isActive} step={step} />
      {step < length && <Line isActive={isActive} />}
    </div>
  );
};

export default Stepper;
