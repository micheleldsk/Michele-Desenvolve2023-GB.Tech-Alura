import React from "react";
import style from "./Watch.module.scss";

interface Props {
  tempo: number | undefined;
}

export default function Watch({ tempo = 0 }: Props) {
  const minutes = Math.floor(tempo / 60);
  const seconds = tempo % 60;
  const [minuteDez, minuteUni] = String(minutes).padStart(2, "0");
  const [secondDez, secondUni] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{minuteDez}</span>
      <span className={style.relogioNumero}>{minuteUni}</span>
      <span className={style.relogioNumero}>:</span>
      <span className={style.relogioNumero}>{secondDez}</span>
      <span className={style.relogioNumero}>{secondUni}</span>
    </>
  );
}
