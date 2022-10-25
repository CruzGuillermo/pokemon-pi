import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import DefaultPoke from "./DefaultPoke.png"


export default function Card({ name, img, types, id, database }) {
  return (
    <Link to={`/home/${id}`} className={style.idPoke}>
      <div className={style.button}>
        <img
          src={img ? img : DefaultPoke  }
          alt="Pokemon imagen"
          width="300px"
          height="318px"
          className={style.img}
        />
        <div className={style.data}>
          <h3 className={style.title}>{name}</h3>
          <div className={style.types}>
            <strong>Tipo: </strong>
            {!database ? types + " " : types.map((p) => p.name + " ")}
          </div>
        </div>
      </div>
    </Link>
  );
}
