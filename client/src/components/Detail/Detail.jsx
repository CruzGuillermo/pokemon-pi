import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../../Redux/actions";
import { Link, useParams } from "react-router-dom";
import s from "./Detail.module.css";
import other from "../../images/default.jpg";
import LoadingPage from "../LoadingPage/LoadingPage";
import NotFound from "../NotFound/NotFound";
import imagen from "../../images/pokemon.png"
import ImgDefault from "../Card/ImgDefault.gif"

export default function Detail() {
  const dispatch = useDispatch();
  const params = useParams();
  const pokemon = useSelector((state) => state.detail);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getPokemonById(params.id));//props.match.params.id
  }, [dispatch, params.id]);

  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.funcional}>
          <Link to="/home" className={s.link}>
           <img src={imagen} alt="" 
           width={100}
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
                    src={poke.img ? poke.img : ImgDefault}
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



// return (
//   <div className={s.container}>
//     <header className={s.header}>
//       <div className={s.funcional}>
//         <Link to="/home" className={s.link}>
//          <img src={imagen} alt="" 
//          width={100}
//          height={60}
//          />
//         </Link>
//       </div>
//     </header>
//     <main className={s.main}>
//        { pokemon.map((p) => (
//           <div className={s.cardContainer} key={p}>
//             <div className={s.card}>
//               <div className={s.imageCont}>
//                 <h1 className={s.title}>{p.name}</h1>
//                 <img
//                   src={p.img ? p.img : other}
//                   alt="Pokemon frontal pic"
//                   className={s.img}
//                 />
//               </div>
//               <div className={s.col}>
//                 <div className={s.info}>
//                   <h2 className= {s.titleInfo}>Pokemon Info</h2>
//                   <p>
//                     <strong>Id: </strong> {p.id}
//                   </p>
//                   <p>
//                     <strong>Type: </strong>
//                     {!p.createdInDb
//                       ? p.types + " "
//                       : p.types.map((e) => e.name + " ")}
//                   </p>
//                   <p>
//                     <strong>Hp: </strong> {p.hp}
//                   </p>
//                   <p>
//                     <strong>Strength: </strong> {p.attack}
//                   </p>
//                   <p>
//                     <strong>Deffense: </strong> {p.defense}
//                   </p>
//                   <p>
//                     <strong>Speed: </strong> {p.speed}
//                   </p>
//                   <p>
//                     <strong>Height: </strong> {p.height}
//                   </p>
//                   <p>
//                     <strong>Weight: </strong> {p.weight}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))
//                     }
//     </main>
//   </div>
// );
// }