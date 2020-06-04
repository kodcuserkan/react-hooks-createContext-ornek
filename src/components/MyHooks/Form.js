import React from "react";
import UseForm from "./UseForm";

function Form() {
  //   const [firstName, setfirstName] = useState("");
  //   const [lastName, setlastName] = useState("");

  const [firstname, degerlerFirstname, resetFirstName] = UseForm("");
  const [lastname, degerlerLastname, resetLastName] = UseForm("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hoş geldiniz bay/ bayan ${firstname} ${lastname}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="name">
        <label htmlFor="" className="name">
          Adınız:{" "}
        </label>
        <input type="text" className="first_name" {...degerlerFirstname} />
      </div>
      <div className="last_name">
        <label htmlFor="" className="last_name">
          Soyadınız:{" "}
        </label>
        <input type="text" className="last_name" {...degerlerLastname} />
      </div>
      <button type="submit">Gönder</button>
    </form>
  );
}

export default Form;
