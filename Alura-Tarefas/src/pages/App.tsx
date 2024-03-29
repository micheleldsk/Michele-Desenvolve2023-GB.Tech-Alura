import React, { useState } from "react";
import Form from "../components/Forms";
import List from "../components/List";
import style from "./App.module.scss";
import Cronometer from "../components/Cronometer";
import { ITask } from "../types/ITask";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [checked, setChecked] = useState<ITask>();
  // const [completed, setCompleted] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setChecked(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        checked: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function finishTask() {
    if (checked) {
      setChecked(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === checked.id) {
            return { ...task, checked: false, completed: true };
          }
          return task;
        })
      );
    }
  }
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Cronometer checked={checked} finishTask={finishTask} />
    </div>
  );
}

export default App;

// import { useEffect } from 'react';
// import axios from 'axios';

// function App() {

//   useEffect(() => {
//     if (checked && checked.completed) {
//       sendWhatsAppMessage();
//     }
//   }, [checked]);

//   async function sendWhatsAppMessage() {
//     try {
//       const response = await axios.post('https://api.twilio.com/2010-04-01/Accounts/SEU_ACCOUNT_SID/Messages.json', {
//         To: 'NUMERO_DE_WHATSAPP_DESTINO',
//         From: 'NUMERO_DE_WHATSAPP_ORIGEM',
//         Body: 'Sua tarefa foi concluída!',
//       }, {
//         auth: {
//           username: 'SEU_ACCOUNT_SID',
//           password: 'SEU_AUTH_TOKEN',
//         },
//       });

//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }
