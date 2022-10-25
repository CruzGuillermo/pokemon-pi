import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../../Redux/actions";
import { Link, useParams } from "react-router-dom";
import s from "./Detail.module.css";
import LoadingPage from "../LoadingPage/LoadingPage";
import NotFound from "../NotFound/NotFound";
import LogoPoke from "./LogoPoke.png"
import DefaultPoke from "./DefaultPoke.png"

export default function Detail() {
  const dispatch = useDispatch();
  const params = useParams();
  const pokemon = useSelector((state) => state.detail);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getPokemonById(params.id));
  }, [dispatch, params.id]);

  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.funcional}>
          <Link to="/home" className={s.link}>
           <img src={LogoPoke} alt="Logo" 
           width={150}
           height={60}
           />
          </Link>
        </div>
        <div className={s.funcional}>
        <Link to="/home" className={s.link} >
          <button className={s.button}>Regresar</button>
          </Link>
          </div>
      </header>
      <main className={s.main}>
        {loading ? (
          <div className={s.centro}>
          <LoadingPage />
          </div>
        ) : pokemon.length > 0 ? (
          pokemon.map((poke) => (
            <div className={s.cardContainer} key={poke}>
              <div className={s.card}>
                <div className={s.imageCont}>
                  <img
                    src={poke.img ? poke.img : DefaultPoke}
                    alt="Pokemon imgs"
                    className={s.img}
                  />
                </div>
                <div className={s.col}>
                  <div className={s.info}>
                    <h1 className={s.title}>{poke.name}</h1>
                    <ul>
                      <strong>Id:{poke.id}</strong> 
                      <br />
                      <strong>Tipo: 
                      {!poke.createdInDb ? poke.types + " " : poke.types.map((type) => type.name + " ")}
                        </strong>
                    </ul>
                    <ul>
                      <strong>Vida: </strong> {poke.hp}
                      <br />
                      <strong>Fuerza: </strong> {poke.attack}
                    </ul>
                    <ul>
                      <strong>Defensa: </strong> {poke.defense}
                      <br />
                      <strong>Velocidad: </strong> {poke.speed}
                    </ul>
                    <ul>
                      <strong>Altura: </strong> {poke.weight}
                      <br />
                      <strong>Peso: </strong> {poke.height}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <NotFound />
        )}
      </main>
    </div>
  );
}



