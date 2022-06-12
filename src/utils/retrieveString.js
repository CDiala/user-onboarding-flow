const getId = (e) => {
  return (
    e.target.id ||
    e.target.parentElement.id ||
    e.target.parentElement.parentElement.id
  );
};

export { getId };
