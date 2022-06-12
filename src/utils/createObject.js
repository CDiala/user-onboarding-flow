import { enrolmentInfoArray } from "../data/enrolmentFormData";

const getKeys = (array) => {
  let keyArray = [];
  for (let i = 0; i < array.length; i++) {
    let subArray = [];
    if (array[i].hasOwnProperty("info")) {
      subArray = array[i].info;
    }
    for (let subKey of subArray) {
      keyArray.push(subKey.label);
    }
  }
  return keyArray;
};

const getObject = (fieldArray) => {
  let enrolmentObject = {};
  // let fieldArray = fnFieldArray();
  for (let key of fieldArray) {
    enrolmentObject[key] = "";
  }
  // console.log(enrolmentObject);
  return enrolmentObject;
};

export const finalEnrolmentObject = getObject(getKeys(enrolmentInfoArray));
