import React from "react";
import { Link } from "react-router-dom";
import s from "./ErrorPage.module.css";
import Errorpage from "./errorpage.png";

export default function ErrorPage() {
  return (
    <div className={s.ppal}>
      <div className={s.container}>
        <div className={s.surprised}>
          <div className={s.border}>
            <h2>ops ! ...</h2>
            <h3>Error al Cargar</h3>
            <p>Por favor, haz clic en el siguiente botón para volver a la página de inicio</p>
          </div>
            <Link to="/home" className={s.btnContainer}>
              <button className={s.btn}>Inicio</button>
            </Link>
        </div>
      </div>
        <img src={Errorpage} alt="Errorpage" width="500px" className={s.imgError} />
    </div>
    
  );
}