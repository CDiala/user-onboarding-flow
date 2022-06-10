const Line = ({ isActive }) => {
  console.log("isActive:", typeof isActive); // #664de5
  return (
    <div
      className={`border ${isActive ? "border-active" : "border-white"} w-8`}
    ></div>
  );
};

const Circle = ({ isActive, step }) => {
  return (
    <div
      className={`${
        isActive ? "text-white" : "text-black"
      } rounded-full border ${isActive ? "border-active" : "border-white"} ${
        isActive ? "bg-active" : "bg-black"
      } flex items-center justify-center cursor-pointer xs:text-xs md:text-base text-lg h-full w-10 transition-all `}
    >
      {step}
    </div>
  );
};

export const Stepper = ({ isActive, step }) => {
  console.log([isActive, step]);
  return (
    <div className="flex justify-center items-center h-10 w-26">
      {step > 1 && <Line isActive={isActive} />}
      <Circle isActive={isActive} step={step} />
      {step < 4 && <Line isActive={isActive} />}
    </div>
  );
};

export default Stepper;
