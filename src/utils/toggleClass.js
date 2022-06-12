const setElementClass = (parentId, childId, color) => {
  let childList = document.getElementById(parentId).children;
  for (let child of childList) {
    child.classList.remove(color);
  }
  document.getElementById(childId).classList.add(color);
};

export default setElementClass;
