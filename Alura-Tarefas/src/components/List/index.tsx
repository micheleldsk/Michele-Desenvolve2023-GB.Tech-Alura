import React from "react";
import "./style.scss";

function List() {
  const tasks = [
    {
      task: "Explorar Canais - React, JS, TS",
      time: "02:00:00",
    },
    {
      task: "Aplicabilidade dos estudos em projetos",
      time: "02:00:00",
    },
    {
      task: "Artes - Crochê, Customizações",
      time: "02:00:00",
    },
    {
      task: "Leitura",
      time: "01:00:00",
    },
  ];
  return (
    <aside className="listaTarefas">
      <h2> Estudos/Tarefas </h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className="item">
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
export default List;
