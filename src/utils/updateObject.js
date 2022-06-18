const updateObjResult = (fxn, objControl, property, value) => {
  fxn({ ...objControl, [property]: value });
};

export default updateObjResult;
