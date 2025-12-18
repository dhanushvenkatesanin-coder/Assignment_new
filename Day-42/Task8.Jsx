function ProductItem({ title, price }) {
  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid #ccc" }}>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}