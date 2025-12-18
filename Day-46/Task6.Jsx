import { useState, useEffect } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return <h2>{time.toLocaleTimeString()}</h2>;
}