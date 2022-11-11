import React, { useState } from "react";
import Contador from "./Contador";

function ContadorContainer() {
  // const estado = useState(0);
  // let contador = estado[0];
  // const setContador = estado[1];

  const [contador, setContador] = useState(0);

  // const estado2 = useState(false);
  // let disableButton = estado2[0];
  // const setDisableButton = estado2[1];

  const [disableButton, setDisableButton] = useState(false);

  const handleClick = e => {
    setContador(contador + 1);
  };
  const handleClick2 = e => {
    setDisableButton(true);
  };

  return (
    <Contador
      handleClick={handleClick}
      handleClick2={handleClick2}
      contador={contador}
      disableButton={disableButton}
    />
  );
}

export default ContadorContainer;
