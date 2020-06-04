import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const innerRef = useRef(null);
  useEffect(() => {
    // useRef kullanılarak her Dom yüklendiğinde aşağıdaki inputun ref sına odaklanılması sağlandı
    innerRef.current.focus();
  }, []);
  const [state, setstate] = useState("");

  console.log(state);
  return (
    <div>
      <input
        ref={innerRef}
        value={state}
        type="text"
        onChange={(e) => setstate(e.target.value)}
      />
      <h4>Girilen kelime: {state}</h4>
    </div>
  );
}
export default UseRef;
