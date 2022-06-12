const stepperLineStyle = (isActive) => {
  return `border ${isActive ? "border-active" : "border-inactive"} w-5 md:w-8`;
};

const circleStyle = (isActive) => {
  return `${isActive ? "text-white" : "text-black"} rounded-full border ${
    isActive ? "border-active" : "border-inactive"
  } ${
    isActive ? "bg-active" : "bg-white"
  } flex items-center justify-center cursor-pointer text-lg h-full w-10 transition-all `;
};

const stepperStyle = (length, step) => {
  return `flex ${
    length === step ? "justify-start" : "justify-end"
  } items-center h-10 w-19.5 md:w-26`;
};

export { stepperLineStyle, circleStyle, stepperStyle };
