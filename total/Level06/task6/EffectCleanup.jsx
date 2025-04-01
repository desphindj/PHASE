import React, { useEffect } from "react";

const EffectCleanup = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Logging every second...");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Cleanup: Interval cleared");
    };
  }, []);

  return (
    <div className="bac">
      <h2>useEffect Cleanup</h2>
      <p>Check the console to see the messages logged every second.</p>
      <p>The interval will stop when the component unmounts.</p>
    </div>
  );
};

export default EffectCleanup;
