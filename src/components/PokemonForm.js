import { useState } from "react";
import { PokeApi } from "../api/PokeApi";
export const PokemonForm = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const enteredNameHandle = (event) => {
    setEnteredName((prev) => event.target.value);
  };

  const apiGet = (enteredName) => {
    const data = PokeApi(enteredName);
    console.log("works!!");
    console.log(data);
  };

  return (
    <div>
      <h1>My API</h1>
      <label>Enter Pokemon Name</label> <br />
      <input
        type="text"
        placeholder="Enter Name"
        onChange={enteredNameHandle}
        value={enteredName}
      ></input>
      <button type="submit" onClick={() => apiGet(enteredName)}>
        Fetch
      </button>
    </div>
  );
};
