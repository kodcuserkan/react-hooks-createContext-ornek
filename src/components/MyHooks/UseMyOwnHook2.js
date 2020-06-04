import React, { useState } from "react";
import UseTitle from "./useTitle";

function UseMyOwnHook2() {
  const [count, setCount] = useState(0);
  UseTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count} kere basıldı</button>
    </div>
  );
}

export default UseMyOwnHook2;
