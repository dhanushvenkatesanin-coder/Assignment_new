import { useState } from "react";

function CountryDropdown() {
  const [country, setCountry] = useState("");

  return (
    <div>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select a country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Japan">Japan</option>
      </select>
      {country && <p>You selected: {country}</p>}
    </div>
  );
}