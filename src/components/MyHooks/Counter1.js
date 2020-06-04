import React from "react";
import UseCounter from "./UseCounter";

function Counter1() {
  const [counter, artir, azalt, reset] = UseCounter(0, 5);
  return (
    <div>
      <h4>**Counter 5' lik : {counter}</h4>
      <button onClick={artir}>Artır</button>
      <button onClick={azalt}>Azalt</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter1;
