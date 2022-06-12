const Card = ({ img, text, id }) => {
  const clearClass = (parentId, childId) => {
    let childList = document.getElementById(parentId).children;
    for (let child of childList) {
      child.classList.remove("border-active");
    }
    document.getElementById(childId).classList.add("border-active");
  };

  return (
    <div
      id={id}
      onClick={(e) => {
        clearClass("inputContainer", e.target.id || e.target.parentElement.id);
      }}
      className="flex flex-col w-46 h-46 p-6 border-2 cursor-pointer rounded-md"
    >
      <img className="w-5 max-w-max mb-7 ml-1" src={img} alt="card icon" />
      <div className="text-xsm">
        <h3 className="mb-4 md:text-base">{text[0]}</h3>
        <p className="text-gray-500">{text[1]}</p>
      </div>
    </div>
  );
};

export default Card;
