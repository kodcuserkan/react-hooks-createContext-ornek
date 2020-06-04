import { useEffect } from "react";

function UseTitle(count) {
  useEffect(() => {
    document.title = `${count} kez basıldı`;
  }, [count]);
}

export default UseTitle;
