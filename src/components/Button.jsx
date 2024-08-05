export default function Button({ onClick ,buttontype, text }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttontype === "secondary" ? "btn--secondary" : ""}`}
    >
      {text}
    </button>
  );
}
