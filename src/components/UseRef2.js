import React, { useState, useRef, useEffect } from "react";

function UseRef2() {
  const [count, setCount] = useState(0);

  const refValue = useRef();

  useEffect(() => {
    refValue.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(refValue.current);
    };
  }, []);

  return (
    <div>
      <h3>**useRef örnek -2 </h3>
      <p>Count: {count}</p>
      <button onClick={() => clearInterval(refValue.current)}>Durdur</button>
    </div>
  );
}

export default UseRef2;
