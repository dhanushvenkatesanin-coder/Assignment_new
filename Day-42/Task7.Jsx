function CustomButton({ text, color = "blue", size = "medium" }) {
  const styles = {
    backgroundColor: color,
    padding: size === "large" ? "12px 24px" : size === "small" ? "6px 12px" : "8px 16px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return <button style={styles}>{text}</button>;
}