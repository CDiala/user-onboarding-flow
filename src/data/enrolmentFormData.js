import success from "../assets/success.png";

const enrolmentInfoArray = [
  {
    title: "Welcome! First things first...",
    note: "You can always change them later.",
    inputInfo: [
      {
        label: "Full Name",
        placeholder: "Steve Jobs",
        value: "",
      },
      {
        label: "Display Name",
        placeholder: "Steve",
        value: "",
      },
    ],
  },

  {
    title: "Let's set up a home for all your work",
    note: "You can always create another workspace later.",
    inputInfo: [
      {
        label: "Workspace Name",
        placeholder: "Eden",
        value: "",
      },
      {
        label: "Workspace URL",
        isOptional: true,
        optionalPlaceholder: "www.eden.com/",
        placeholder: "Example",
        value: "",
      },
    ],
  },

  {
    title: "How are you planning to use Eden?",
    note: "We'll streamline your setup experience accordingly.",
    cardInfo: [
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
  },

  {
    img: success,
    title: "Congratulations, Eren!",
    note: "You have completed onboarding, you can start using the Eden!",
  },
];

export default enrolmentInfoArray;
