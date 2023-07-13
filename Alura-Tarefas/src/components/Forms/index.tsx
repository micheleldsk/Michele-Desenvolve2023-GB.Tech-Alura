import React from "react";
import Button from "../Buttons";

class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="task">O que será estudado</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que será estudado:"
            required
          />
        </div>
        <div>
          <label htmlFor="time">Tempo</label>
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
        <Button />
      </form>
    );
  }
}

export default Form;
