function Header() {
  return <header style={{ background: "#333", color: "#fff", padding: "10px" }}>My Website</header>;
}

function Content() {
  return <main style={{ padding: "20px" }}>This is the content area.</main>;
}

function Footer() {
  return <footer style={{ background: "#333", color: "#fff", padding: "10px" }}>© 2025 My Website</footer>;
}

function Page() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}