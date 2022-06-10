import eden from "../../assets/eden.png";

const AppLogo = () => {
  return (
    <header className="flex items-center justify-center gap-x-3.5 w-full">
      <img src={eden} alt="company logo" />
      <h1 className="text-2xl ">Eden</h1>
    </header>
  );
};

export default AppLogo;
