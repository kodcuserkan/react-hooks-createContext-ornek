import React from "react";
import UseCounter from "./UseCounter";

function Counter2() {
  const [counter, artir, azalt, reset] = UseCounter(10, 7);
  return (
    <div>
      <h4>**Counter 7' lik : {counter}</h4>
      <button onClick={artir}>Artır</button>
      <button onClick={azalt}>Azalt</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter2;
