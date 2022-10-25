import React from "react";
import s from "./NotFound.module.css";
import NotFoundGif from "./notFound.gif"

export default function NotFound() {
  return (
    <div className={s.container}>
      <img src={NotFoundGif} alt="Not found pic" width={400} height={400} />
      <h3>Pokemon no Encontrado</h3>
    </div>
  );
}