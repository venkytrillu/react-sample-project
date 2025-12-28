

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ marginRight: "10px", padding: "8px 16px" }}
    >
      {text}
    </button>
  );
};

export default Button;