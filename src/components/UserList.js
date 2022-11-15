import React from "react";
import User from "./User";

const UserList = ({ usuarios }) => {
  //   const res = usuarios.map(usuario => {
  //     return <li>{usuario.nombre}</li>;
  //   });

  return (
    <section>
      {usuarios.map(usuario => {
        return <User key={usuario.id} usuario={usuario} />;
      })}
    </section>
  );
};

export default UserList;
