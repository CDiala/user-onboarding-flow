const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-2.5 w-4/5 md:w-100 border rounded-md bg-active text-white md:text-lg"
    >
      {text}
    </button>
  );
};

export default Button;
