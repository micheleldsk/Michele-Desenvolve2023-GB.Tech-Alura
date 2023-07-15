import React from "react";
import style from "./Watch.module.scss";

export default function Watch() {
  return (
    <>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>:</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
    </>
  );
}
