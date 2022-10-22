import React from "react";
import surprised from "../../images/GifPoke4.gif";
import s from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={s.container}>
      <img src={surprised} alt="Not found pic" width={400} height={400} />
      <h3>Pokemon no Encontrado</h3>
    </div>
  );
}