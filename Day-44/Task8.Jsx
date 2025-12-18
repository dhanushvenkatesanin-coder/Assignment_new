function UserList() {
  const users = [
    { id: 1, name: "Arun", age: 22 },
    { id: 2, name: "Priya", age: 25 },
    { id: 3, name: "Kumar", age: 28 }
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.age} years old
        </li>
      ))}
    </ul>
  );
}