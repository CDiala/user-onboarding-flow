const Line = ({ isActive }) => {
  console.log("isActive:", typeof isActive); // #664de5
  return (
    <div className={`border border-${isActive ? "active" : "white"} w-8`}></div>
  );
};

const Circle = ({ isActive, step }) => {
  return (
    <div
      className={`text-${
        isActive ? "white" : "black"
      } rounded-full border border-${isActive ? "active" : "white"} bg-${
        isActive ? "active" : "black"
      } flex items-center justify-center cursor-pointer xs:text-xs md:text-base text-lg h-full w-10 transition-all `}
    >
      {step}
    </div>
  );
};

export const Stepper = ({ isActive, step }) => {
  console.log([isActive, step]);
  return (
    <div className="flex justify-center items-center h-10 w-27">
      {step > 1 && <Line isActive={isActive} />}
      <Circle isActive={isActive} step={step} />
      <Line isActive={isActive} />
    </div>
  );
};

export default Stepper;
