function DataList({ items }) {
  return (
    <div>
      {items.length === 0 ? (
        <p>No Data Available</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}