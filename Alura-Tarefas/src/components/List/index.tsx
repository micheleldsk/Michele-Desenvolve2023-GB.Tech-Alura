import style from "./List.module.scss";
import Item from "./Itens";
import { ITask } from "../../types/ITask";

interface Props {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos/Tarefas</h2>
      <ul>
        {tasks.map((item) => (
          <Item
            selectTask={selectTask}
            key={item.id}
            task={item.task}
            time={item.time}
            checked={item.checked}
            completed={item.completed}
            id={item.id}
          />
          // <Item {...item}/> - pode ser dessa forma também, porém merece mais atenção!
        ))}
      </ul>
    </aside>
  );
}
export default List;
