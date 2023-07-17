import React, { useEffect, useState } from "react";
import Button from "../Buttons";
import Watch from "./Watch";
import style from "./Cronometer.module.scss";
import { ITask } from "../../types/ITask";
import { timeForSeconds } from "../utils/time";

interface Props {
  checked: ITask | undefined;
}

export default function Cronometer({ checked }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (checked?.time) {
      setTime(timeForSeconds(checked.time));
    }
  }, [checked]);

  return (
    <React.Fragment>
      <div className={style.cronometro}>
        <p>Escolha um card e inicie o cronômetro:</p>
        Tempo: {time}
        <div className={style.relogioWrapper}>
          <Watch tempo={time} />
        </div>
        <Button texto="Começar!" />
      </div>
    </React.Fragment>
  );
}
