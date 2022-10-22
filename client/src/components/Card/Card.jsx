import React from "react";
import { Link } from "react-router-dom";
import other from "../../images/default.jpg";
import style from "./Card.module.css";
import Imgdefault from "./ImgDefault.gif"

export default function Card({ name, img, types, id, createdInDb }) {
  return (
    <Link to={`/home/${id}`} className={style.idPoke}>
      <div className={style.button}>
      <h6 className={style.id}>Id:{id}</h6>
        <img
          src={img ? img : Imgdefault}
          alt="Pokemon imagen"
          width="300px"
          height="318px"
          className={style.img}
          
        />
        <div className={style.data}>
          <h3 className={style.title}>{name}</h3>
          <div className={style.types}>
            <strong>Tipo: </strong>
            {!createdInDb ? types + " " : types.map((p) => p.name + " ")}
          </div>
        </div>
      </div>
    </Link>
  );
}