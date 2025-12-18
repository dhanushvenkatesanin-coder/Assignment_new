import { useState, useEffect } from "react";

function GitHubUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/octocat")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h2>{user.name}</h2>
          <img src={user.avatar_url} alt={user.name} width="100" />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}