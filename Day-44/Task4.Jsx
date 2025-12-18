function CityListProperKeys() {
  const cities = [
    { id: 1, name: "Chennai" },
    { id: 2, name: "Delhi" },
    { id: 3, name: "Mumbai" },
    { id: 4, name: "Bangalore" },
    { id: 5, name: "Hyderabad" }
  ];

  return (
    <ul>
      {cities.map((city) => (
        <li key={city.id}>{city.name}</li>
      ))}
    </ul>
  );
}