const Card = ({ img, text }) => {
  return (
    <div className="flex flex-col w-46 h-46 p-6 rounded ">
      <img className="w-5 max-w-max mb-7 ml-1" src={img} alt="card icon" />
      <h3 className="mb-4">{text[0]}</h3>
      <p className="text-gray-500 xs:text-xs md:text-sm text-base">{text[1]}</p>
    </div>
  );
};

export default Card;
