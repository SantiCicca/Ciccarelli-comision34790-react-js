import React, { useState, useEffect } from "react";
import UserList from "./UserList";

const UserContainer = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    console.log("pido productos al servidor...");
    setTimeout(() => {
      console.log("Productos recibidos!");

      setUsuarios([
        { id: 1, nombre: "usuario 1" },
        { id: 2, nombre: "usuario 2" },
        { id: 3, nombre: "usuario 3" },
      ]);
    }, 2000);
  }, []);

  return <UserList usuarios={usuarios} />;
};

export default UserContainer;
