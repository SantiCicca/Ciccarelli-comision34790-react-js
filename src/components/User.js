import React from "react";

const User = ({ usuario }) => {
  return (
    <div>
      <article>{usuario.nombre}</article>
    </div>
  );
};

export default User;
