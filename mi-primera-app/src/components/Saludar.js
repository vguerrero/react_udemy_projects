import React from "react";

function Saludar(props) {
  console.log(props);
  return (
    <div>
      <h2>
        Hola {props.name} tienes {props.edad}
      </h2>
    </div>
  );
}

export default Saludar;
