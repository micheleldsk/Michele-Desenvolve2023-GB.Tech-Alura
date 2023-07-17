import React, { useState } from "react";
import Form from "../components/Forms";
import List from "../components/List";
import style from "./App.module.scss";
import Cronometer from "../components/Cronometer";
import { ITask } from "../types/ITask";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [checked, setChecked] = useState<ITask>();
  const [completed, setCompleted] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setChecked(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        checked: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Cronometer checked={checked} />
    </div>
  );
}

export default App;
