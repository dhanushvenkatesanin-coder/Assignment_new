function ProfileCard({ name, job, avatar }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "10px", width: "200px" }}>
      <img src={avatar} alt={name} style={{ width: "100%", borderRadius: "50%" }} />
      <h2>{name}</h2>
      <p>{job}</p>
    </div>
  );
}