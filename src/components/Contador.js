import React from "react";

const Contador = props => {
  // const {
  //   handleClick: handleClick,
  //   contador: contador,
  //   disableButton: disableButton,
  // } = props;

  const { handleClick, handleClick2, contador, disableButton } = props;

  return (
    <>
      <button onClick={handleClick}>click</button>
      <p>
        Contador: <span>{contador}</span>
      </p>

      <button disabled={disableButton} onClick={handleClick2}>
        Click to disable
      </button>
    </>
  );
};

export default Contador;
