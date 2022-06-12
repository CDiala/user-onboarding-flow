import success from "../assets/success.png";

export const enrolmentInfoArray = [
  {
    title: "Welcome! First things first...",
    note: "You can always change them later.",
    info: [
      {
        label: "Full Name",
        placeholder: "Steve Jobs",
        type: "text",
      },
      {
        label: "Display Name",
        placeholder: "Steve",
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
        type: "text",
      },
      {
        label: "Workspace URL",
        isOptional: true,
        optionalPlaceholder: "www.eden.com/",
        placeholder: "Example",
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
