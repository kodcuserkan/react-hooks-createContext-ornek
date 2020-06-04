import { useState } from "react";

function UseCounter(intialState = 0, deger) {
  const [counter, setCounter] = useState(intialState);

  const artir = () => {
    setCounter((prevCount) => prevCount + deger);
  };

  const azalt = () => {
    setCounter((prevCount) => prevCount - deger);
  };

  const reset = () => {
    setCounter(intialState);
  };

  return [counter, artir, azalt, reset];
}

export default UseCounter;
