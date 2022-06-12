const activeInput = (readOnly) => {
  return `${
    readOnly
      ? "w-13/20 rounded-l-none border-0 focus:leading-5.5"
      : "w-full border"
  } py-2.5 px-3.5 rounded-md border-slate-200 focus:ring-active focus:border focus:border-active`;
};

const inactiveInput = () => {
  return `items-center rounded-l-md border-0 border-r border-slate-200 bg-gray-50 font-medium py-2.5 px-3.5 w-7/20`;
};

const inputGroup = (readOnly) => {
  return `${readOnly ? "border" : "border-0"} flex rounded-md border-slate-200`;
};

const labelStyle = () => {
  return "block font-medium text-gray-700 mb-3";
};

const optLabelStyle = () => {
  return "text-gray-400";
};

const controlGroupClass = () => {
  return "w-full text-base md:text-lg";
};

export {
  activeInput,
  inactiveInput,
  inputGroup,
  labelStyle,
  optLabelStyle,
  controlGroupClass,
};
