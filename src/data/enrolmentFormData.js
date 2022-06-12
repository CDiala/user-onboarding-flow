import success from "../assets/success.png";

export const enrolmentInfoArray = [
  {
    title: "Welcome! First things first...",
    note: "You can always change them later.",
    info: [
      {
        label: "Full Name",
        placeholder: "Steve Jobs",
        value: "",
        type: "text",
      },
      {
        label: "Display Name",
        placeholder: "Steve",
        value: "",
        type: "text",
      },
    ],
    control: "input",
  },

  {
    title: "Let's set up a home for all your work",
    note: "You can always create another workspace later.",
    info: [
      {
        label: "Workspace Name",
        placeholder: "Eden",
        value: "",
        type: "text",
      },
      {
        label: "Workspace URL",
        isOptional: true,
        optionalPlaceholder: "www.eden.com/",
        placeholder: "Example",
        value: "",
        type: "email",
      },
    ],
    control: "input",
  },

  {
    title: "How are you planning to use Eden?",
    note: "We'll streamline your setup experience accordingly.",
    info: [
      {
        label: "For myself",
        placeholder: `Write better. Think more clearly. Stay organized.`,
        isSelected: false,
      },
      {
        label: "With my team",
        placeholder: `Wikis, docs, tasks & projects, all in one place.`,
        isSelected: false,
      },
    ],
    control: "card",
  },

  {
    img: success,
    title: "Congratulations, name!",
    note: "You have completed onboarding, you can start using the Eden!",
  },
];

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
  for (let key of fieldArray) {
    enrolmentObject[key] = "";
  }

  return enrolmentObject;
};

export const finalEnrolmentObject = getObject(getKeys(enrolmentInfoArray));
