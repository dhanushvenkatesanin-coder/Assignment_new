function LoginStatus({ isLoggedIn }) {
  return <h2>{isLoggedIn ? "Logged In" : "Guest"}</h2>;
}