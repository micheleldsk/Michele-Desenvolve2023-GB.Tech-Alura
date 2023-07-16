import React from "react";
import Button from "../Buttons";
import Watch from "./Watch";
import style from "./Cronometer.module.scss";

export default function Cronometer() {
  return (
    <React.Fragment>
      <div className={style.cronometro}>
        <p>Escolha um card e inicie o cronômetro:</p>
        <div className={style.relogioWrapper}>
          <Watch />
        </div>
        <Button texto="Começar!" />
      </div>
    </React.Fragment>
  );
}
