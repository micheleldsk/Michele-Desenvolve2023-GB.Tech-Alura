import React from "react";
import style from "./List.module.scss";
import Item from "./Itens";

function List() {
  let tasks = [
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
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          tasks = [...tasks, { task: "Estudar estado", time: "05:00:00" }];
        }}
      >
        {" "}
        Estudos/Tarefas{" "}
      </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} task={item.task} time={item.time} />
          // <Item {...item}/> - pode ser dessa forma também, porém merece mais atenção!
        ))}
      </ul>
    </aside>
  );
}
export default List;
