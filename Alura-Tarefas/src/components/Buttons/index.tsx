import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{ texto: string }> {
  render() {
    return <button className={style.botao}>{this.props.texto}</button>;
  }
}

export default Button;
