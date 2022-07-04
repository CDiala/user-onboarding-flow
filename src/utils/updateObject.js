const updateObjResult = (fxn, objControl, property, value) => {
  fxn({ ...objControl, [property]: value });
};

const updateOption = (fxn, obj, key, value) => {
  if (Object.keys(obj).includes(key)) {
    updateObjResult(fxn, obj, key, value);
  }
};

export { updateObjResult, updateOption };
