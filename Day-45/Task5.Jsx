import { useState } from "react";

function PasswordValidation() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div>
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Confirm Password" 
        value={confirm} 
        onChange={(e) => setConfirm(e.target.value)} 
      />
      <p>
        {confirm && (password === confirm ? "✅ Passwords match" : "❌ Passwords do not match")}
      </p>
    </div>
  );
}