import { useState } from "react";

function ColorButton() {
  const [color, setColor] = useState("lightblue");

  return (
    <div style={{ backgroundColor: color, padding: "20px" }}>
      <button onClick={() => setColor(color === "lightblue" ? "lightgreen" : "lightblue")}>
        Change Background
      </button>
    </div>
  );
}