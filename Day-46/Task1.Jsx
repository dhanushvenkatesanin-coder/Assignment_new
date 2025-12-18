import { useEffect } from "react";

function RenderedExample() {
  useEffect(() => {
    console.log("Rendered!");
  });

  return <h2>Check console for logs</h2>;
}