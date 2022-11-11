import React from "react";

function RenderItems(prop) {
  let nombreCompleto = prop.nombre + " " + prop.apellido;

  return <p>Bienvenido {nombreCompleto}!</p>;
}

export default RenderItems;
