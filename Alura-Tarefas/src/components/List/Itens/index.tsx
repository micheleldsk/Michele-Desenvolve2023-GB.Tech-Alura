import { ITask } from "../../../types/ITask";
import style from "./Item.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function Item({
  task,
  time,
  checked,
  completed,
  id,
  selectTask,
}: Props) {
  return (
    <li
      className={`${style.item} ${checked ? style.itemSelecionado : ""} ${
        completed ? style.itemCompletado : ""
      }`}
      onClick={() =>
        !completed &&
        selectTask({
          task,
          time,
          checked,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={style.concluido} aria-label="done"></span>}
    </li>
  );
}
