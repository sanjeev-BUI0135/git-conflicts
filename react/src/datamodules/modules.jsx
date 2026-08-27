import { useEffect, useState } from "react";

function Timestamp() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timestamp">
      <span>Current Time:</span>
      <strong>{time}</strong>
    </div>
  );
}

export default Timestamp;