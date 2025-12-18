import { useState, useEffect } from "react";

function NameLogger() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  return (
    <input 
      type="text" 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      placeholder="Enter name"
    />
  );
}