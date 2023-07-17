import React, { useEffect, useState } from "react";
import Button from "../Buttons";
import Watch from "./Watch";
import style from "./Cronometer.module.scss";
import { ITask } from "../../types/ITask";
import { timeForSeconds } from "../utils/time";

interface Props {
  checked: ITask | undefined;
  finishTask: () => void;
}

export default function Cronometer({ checked, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (checked?.time) {
      setTime(timeForSeconds(checked.time));
    }
  }, [checked]);

  function regressive(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return regressive(count - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <React.Fragment>
      <div className={style.cronometro}>
        <p>Escolha um card e inicie o cronômetro:</p>
        Tempo: {time}
        <div className={style.relogioWrapper}>
          <Watch tempo={time} />
        </div>
        <Button texto="Começar!" onClick={() => regressive(time)} />
      </div>
    </React.Fragment>
  );
}
