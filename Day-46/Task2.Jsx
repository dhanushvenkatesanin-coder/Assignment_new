import { useEffect } from "react";

function LoadedExample() {
  useEffect(() => {
    console.log("Component Loaded");
  }, []); // empty dependency array → runs only once

  return <h2>Loaded Example</h2>;
}