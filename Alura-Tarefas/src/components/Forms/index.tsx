import React from "react";
import Button from "../Buttons";
import style from "./Form.module.scss";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className={style.novaTarefa}>
          <div className={style.label}>
            <h1>Olá Michele, um exclente dia!</h1>
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="task" className={style.label}>
              O que será estudado:
            </label>
            <input
              type="text"
              name="task"
              id="task"
              // placeholder="O que será estudado:"
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="time" className={style.label}>
              Tempo
            </label>
            <input
              type="time"
              step={1}
              name="time"
              id="time"
              min="00:00:00"
              max="02:00:00"
              required
            />
          </div>
          <Button texto="Adicionar" />
        </form>
      </div>
    );
  }
}

export default Form;
