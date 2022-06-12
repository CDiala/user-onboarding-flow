const enrolmentContainerStyle = () => {
  return "max-w-131 flex flex-col justify-center items-center m-auto h-full";
};

const successImageStyle = () => {
  return "mb-12";
};

const formCaptionStyle = () => {
  return "w-4/5 md:w-full mb-9 md:mb-14 text-center";
};

const formTitleStyle = () => {
  return "mb-[22px] text-xl md:text-3xl font-bold";
};

const formSubheaderStyle = () => {
  return "text-gray-500 text-small md:text-lg";
};

const formInputControlStyle = (count) => {
  return `w-4/5 md:w-100 flex flex-col ${
    count !== 2 ? "gap-y-6" : "md:flex-row gap-y-6 md:gap-x-8"
  } items-center mb-6`;
};

export {
  enrolmentContainerStyle,
  successImageStyle,
  formCaptionStyle,
  formTitleStyle,
  formSubheaderStyle,
  formInputControlStyle,
};
