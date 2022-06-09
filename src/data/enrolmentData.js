import success from "../assets/success.png";

const enrolmentInfoArray = {
  1: {
    title: "Welcome! First things first...",
    note: "You can always change them later.",
    controlOne: {
      label: "Full Name",
      placeholder: "Steve Jobs",
      value: "",
    },
    controlTwo: {
      label: "Display Name",
      placeholder: "Steve",
      value: "",
    },
  },

  2: {
    title: "Let's set up a home for all your work",
    note: "You can always create another workspace later.",
    controlOne: {
      label: "Workspace Name",
      placeholder: "Eden",
      value: "",
    },
    controlTwo: {
      label: "Workspace URL",
      isOptional: true,
      optionalPlaceholder: "www.eden.com/",
      placeholder: "Example",
      value: "",
    },
  },

  3: {
    title: "How are you planning to use Eden?",
    note: "We'll streamline vour setup experience accordingly.",
    controlOne: {
      label: "For myself",
      placeholder: `Write better. Think more clearly. Stay organized`,
      isSelected: false,
    },
    controlTwo: {
      label: "Workspace URL",
      placeholder: "Example",
      isSelected: false,
    },
  },

  4: {
    img: success,
    title: "Congratulations, Eren!",
    note: "You have completed onboarding, you can start using the Eden!",
  },
};

export default enrolmentInfoArray;
