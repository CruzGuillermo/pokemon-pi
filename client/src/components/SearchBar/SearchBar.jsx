import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../Redux/actions";
import s from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  //estado local
  const [name, setName] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getPokemonByName(name));
    setName("");
  }

  return (
    <div >
      <input
        type="text"
        value={name}
        placeholder="nombre pokemon..."
        onChange={(e) => handleChange(e)}
        className={s.Buscador}
      />
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className={s.button}>
        Buscar
        </button>       
    </div>
  );
}

