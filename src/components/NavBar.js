import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <a href="">Productos</a>
      <a href="">Nosotros</a>
      <a href="">Noticias</a>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
