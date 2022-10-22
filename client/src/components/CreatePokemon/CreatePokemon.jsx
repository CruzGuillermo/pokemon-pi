import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTypes, postPokemon } from "../../Redux/actions/index";
import { Link, useNavigate  } from "react-router-dom";
import logo from "../../images/pokemon.png";
import s from "./CreatePokemon.module.css";

export function validate(pokemon) {
  let error = { disableBtn: false };
  if (!pokemon.name) {
    error.name = "nombre requerido";
    error.disableBtn = true;
  } else if (!/\S{5,20}[^0-9]/.test(pokemon.name)) {
    error.name = "El nombre debe contener de 6 a 20 caracteres solamente";
    error.disableBtn = true;
  }

  if (pokemon.attack < 0 || pokemon.attack > 200) {
    error.attack = "El número debe ser mayor que 0 y menor que 200";
    error.disableBtn = true;
  } 
  

  if (pokemon.hp < 0) {
    error.hp = "El número debe ser mayor que 0";
    error.disableBtn = true;
  }

  if (pokemon.defense < 0) {
    error.defense = "El número debe ser mayor que 0";
    error.disableBtn = true;
  }

  if (pokemon.speed < 0) {
    error.speed = "El número debe ser mayor que 0";
    error.disableBtn = true;
  }

  if (pokemon.height < 0) {
    error.height = "El número debe ser mayor que 0";
    error.disableBtn = true;
  }

  if (pokemon.weight < 0) {
    error.weight = "El número debe ser mayor que 0";
    error.disableBtn = true;
  }

  return error;
}

export default function CreatePokemon() {
  const [pokemon, setPokemon] = useState({
    name: "",
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    img: "",
    types: [],
  });


  const [error, setError] = useState({ disableBtn: true });

  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.types);

  const history = useNavigate();

   useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  function handleChange(e) {
    setPokemon((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError(validate({ ...pokemon, [e.target.name]: e.target.value }));
  }

  function handleSelect(e) {
    setPokemon({
      ...pokemon,
      types: [...pokemon.types, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postPokemon(pokemon));
    alert("Pokemon Creado con Exito");
    setPokemon({
      name: "",
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      height: '',
      weight: '',
      img: "",
      types: [],
    });
    history.push("/home");
  }

  function handleDelete(tipo) {
    setPokemon({
      ...pokemon,
      types: pokemon.types.filter((t) => t !== tipo),
    });
  }

  return (
    <div className={s.container}>
      <header className={s.header}>
      <Link to="/home" >
        <img src={logo} alt="Logo Pokemon" className={s.logo} />
        </Link>
        <div className={s.funcional}>
          <Link to="/home" className={s.buttonn}>
           Regresar
          </Link>
        </div>
      </header>
      <main className={s.main}>
        <div className={s.formContainer}>

          <div className={s.form}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className={s.inputContainer}>
                <label>nombre</label>
                <input
                  type="text"
                  placeholder="nombre pokemon"
                  value={pokemon.name}
                  name="name"
                  autoComplete="off"
                  onChange={(e) => handleChange(e)}
                />
                {error.name && (
                  <strong
                    style={{
                      color: "red",
                      fontSize: "14px",
                      fontWeight: "lighter",
                    }}
                  >
                    {error.name}
                  </strong>
                )}
              </div>

              <div className={s.inputContainer}>
                <label>Vida</label>
                <input
                  type="number"
                  placeholder="Enter a value"
                  value={pokemon.hp}
                  name="hp"
                  onChange={(e) => handleChange(e)}
                />
                {error.hp && (
                  <strong
                    style={{
                      color: "red",
                      fontSize: "14px",
                      fontWeight: "lighter",
                    }}
                  >
                    {error.hp}
                  </strong>
                )}
              </div>

              <div className={s.inputContainer}>
                <label>Fuerza</label>
                <input
                  type="number"
                  placeholder="Enter a value"
                  value={pokemon.attack}
                  name="attack"
                  onChange={(e) => handleChange(e)}
                  className={error.attack && "danger"}
                />
                <strong
                  style={{
                    color: "red",
                    fontSize: "14px",
                    fontWeight: "lighter",
                  }}
                >
                  {error.attack}
                </strong>
              </div>

              <div className={s.inputContainer}>
                <label>Defensa</label>
                <input
                  type="number"
                  placeholder="Enter a value"
                  value={pokemon.defense}
                  name="defense"
                  onChange={(e) => handleChange(e)}
                />
                {error.defense && (
                  <strong
                    style={{
                      color: "red",
                      fontSize: "14px",
                      fontWeight: "lighter",
                    }}
                  >
                    {error.defense}
                  </strong>
                )}
              </div>

              <div className={s.inputContainer}>
                <label>Velocidad</label>
                <input
                  type="number"
                  placeholder="Enter a value"
                  value={pokemon.speed}
                  name="speed"
                  onChange={(e) => handleChange(e)}
                />
                {error.speed && (
                  <strong
                    style={{
                      color: "red",
                      fontSize: "14px",
                      fontWeight: "lighter",
                    }}
                  >
                    {error.speed}
                  </strong>
                )}
              </div>

              <div className={s.inputContainer}>
                <label>Altura</label>
                <input
                  type="number"
                  placeholder="Enter a value"
                  value={pokemon.height}
                  name="height"
                  onChange={(e) => handleChange(e)}
                />
                {error.height && (
                  <strong
                    style={{
                      color: "red",
                      fontSize: "14px",
                      fontWeight: "lighter",
                    }}
                  >
                    {error.height}
                  </strong>
                )}
              </div>

              <div className={s.inputContainer}>
                <label>Peso</label>
                <input
                  type="number"
                  placeholder="Enter a value"
                  value={pokemon.weight}
                  name="weight"
                  onChange={(e) => handleChange(e)}
                />
                {error.weight && (
                  <strong
                    style={{
                      color: "red",
                      fontSize: "14px",
                      fontWeight: "lighter",
                    }}
                  >
                    {error.weight}
                  </strong>
                )}
              </div>

              <div className={s.inputContainer}>
                <label>Imagen</label>
                <input
                  type="text"
                  placeholder="introduce una URL"
                  autoComplete="off"
                  value={pokemon.img}
                  name="img"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className={s.inputContainer}>
                <label>Tipo</label>
                <select onChange={(e) => handleSelect(e)}>
                  <option disabled>Types</option>
                  {allTypes &&
                    allTypes.map((t) => {
                      return (
                        <option value={t.name} key={t.name} name="types">
                          {t.name}
                        </option>
                      );
                    })}
                </select>

                <div>
                  {pokemon.types.map((e) => {
                    return (
                      <div className={s.selected} key={e}>
                        <p className={s.p}>{e}</p>
                        <button
                          onClick={() => {
                            handleDelete(e);
                          }}
                          className={s.btnDelete}>
                          x
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={s.inputContainer}>
                <input
                  type="submit"
                  value="Crear pokemon!"
                  className={s.buttonn}
                  disabled={error.disableBtn}
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}