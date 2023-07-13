import React from "react";

class Button extends React.Component {
  render() {
    // const color = 'red'; - pode ser chamado em backgroundColor pela variável.
    return (
      <button style={{ backgroundColor: "#B0C4DE", borderRadius: "5px" }}>
        Button
      </button>
    );
  }
}

export default Button;
