import React from "react";

function ItemListContainer(greeting) {
  let mensaje = greeting.mensaje;
  return (
    <div>
      <p>Te dejo este muy interesante mensaje: {mensaje}</p>
    </div>
  );
}

export default ItemListContainer;
