import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
      </div>
      <div className={s.btnContainer}>
        <Link to="/home">
          <button className={s.button}>ENTER!</button>
        </Link>
      </div>
    </div>
  );
}
export default LandingPage;