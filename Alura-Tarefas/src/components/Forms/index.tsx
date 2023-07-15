import React from "react";
import Button from "../Buttons";
import style from "./Form.module.scss";
import { ITask } from "../../types/ITask";
import { v4 as uuidv4 } from "uuid";

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    task: "",
    time: "00:00",
  };

  addTask(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      {
        ...this.state,
        checked: false,
        completed: false,
        id: uuidv4(),
      },
    ]);
    this.setState({
      task: "",
      time: "00:00",
    });
  }
  render() {
    return (
      <div>
        <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
          <div className={style.label}>
            <h1>Olá Michele, um exclente dia!</h1>
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="task" className={style.label}>
              Estudos/Tarefas que deseja adicionar:
            </label>
            <input
              type="text"
              name="task"
              id="task"
              value={this.state.task}
              onChange={(evento) =>
                this.setState({ ...this.state, task: evento.target.value })
              }
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
              value={this.state.time}
              onChange={(evento) =>
                this.setState({ ...this.state, time: evento.target.value })
              }
              id="time"
              min="00:00:00"
              max="02:00:00"
              required
            />
          </div>
          <Button type="submit" texto="Adicionar" />
        </form>
      </div>
    );
  }
}

export default Form;
