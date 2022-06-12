import { enrolmentInfoArray } from "../data/enrolmentFormData";

const getKeys = (array) => {
  let keyArray = [];
  for (let i = 0; i < array.length; i++) {
    let subArray = [];
    if (array[i].hasOwnProperty("info")) {
      subArray = array[i].info;
    }
    for (let subKey of subArray) {
      if (!subKey.hasOwnProperty("isSelected")) {
        keyArray.push(subKey.label);
      }
    }
  }
  return keyArray;
};

const getObject = (fieldArray) => {
  let enrolmentObject = {};
  for (let key of fieldArray) {
    enrolmentObject[key] = "";
  }
  return enrolmentObject;
};

export const finalEnrolmentObject = getObject(getKeys(enrolmentInfoArray));
