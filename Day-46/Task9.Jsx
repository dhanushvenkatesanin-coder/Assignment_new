import { useState } from "react";

function CharCount() {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />
      <p>Character count: {text.length}</p>
    </div>
  );
}