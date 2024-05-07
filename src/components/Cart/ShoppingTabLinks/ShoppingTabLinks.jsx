import "./shoppingTabLinks.css";

function ShoppingTabLinks({ links, onSetActiveIndex, activeIndex }) {
  const handleItemClick = (index) => {
    onSetActiveIndex(index);
  };

  return (
    <div className="shpTab">
      {links.map((el, i) => (
        <p
          key={i}
          className={`shpTabItem ${i === activeIndex ? "active" : ""}`}
          onClick={() => handleItemClick(i)}
        >
          {el}
        </p>
      ))}
    </div>
  );
}

export default ShoppingTabLinks;
