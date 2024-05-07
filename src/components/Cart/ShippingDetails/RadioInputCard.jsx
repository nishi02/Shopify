function RadioInputCard({ content = "content", checked, onChange }) {
  return (
    <div
      className={`radioInputCard ${checked ? "active" : ""}`}
      onClick={onChange}
    >
      <input type="radio" checked={checked} readOnly />
      <p>
        <span>{content[0]}</span>
        <span>{content[1]}</span>
      </p>
    </div>
  );
}

export default RadioInputCard;
