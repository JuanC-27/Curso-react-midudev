const Square = ({ children, isSelected, updateBoard, index }) => {
  const conditionalClass = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div className={conditionalClass} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Square;