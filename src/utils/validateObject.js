export const isKeyComplete = (obj, count) => {
  return Object.keys(obj).length === count && !Object.values(obj).includes("");
};

export default isKeyComplete;
