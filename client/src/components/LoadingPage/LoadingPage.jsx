import React from "react";
import spinner from "./4m3s.gif";
import s from "./LoadingPage.module.css";

export default function LoadingPage() {
  return (
      <img src={spinner} alt="Spinner gif not found"
       width={400}  height={400} 
       className={s.container}/>
   
  );
}