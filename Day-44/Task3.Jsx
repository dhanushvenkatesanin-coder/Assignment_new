function CityList() {
  const cities = ["Chennai", "Delhi", "Mumbai", "Bangalore", "Hyderabad"];

  return (
    <ul>
      {cities.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  );
}