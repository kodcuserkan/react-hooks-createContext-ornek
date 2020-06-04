import { useState } from "react";

function UseForm(initial) {
  const [name, setname] = useState(initial);
  const reset = () => {
    setname(initial);
  };
  const degerler = {
    value: name,
    onChange: (e) => {
      setname(e.target.value);
    },
  };

  return [name, degerler, reset];
}

export default UseForm;
