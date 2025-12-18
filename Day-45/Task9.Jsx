import { useState } from "react";

function ValidatedForm() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert("Field cannot be empty!");
      return;
    }
    alert(`Submitted: ${text}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter something" />
      <button type="submit">Submit</button>
    </form>
  );
}