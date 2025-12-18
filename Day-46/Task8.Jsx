import { useState, useEffect } from "react";

function SearchUser() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (term) {
      fetch(`https://api.github.com/search/users?q=${term}`)
        .then((res) => res.json())
        .then((data) => setResults(data.items || []));
    }
  }, [term]);

  return (
    <div>
      <input 
        value={term} 
        onChange={(e) => setTerm(e.target.value)} 
        placeholder="Search GitHub users"
      />
      <ul>
        {results.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}