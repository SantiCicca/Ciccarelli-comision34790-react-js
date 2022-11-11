import React from "react";
import ContadorContainer from "./ContadorContainer";

function Main() {
  return (
    <main id="main-index">
      <h2>Categorias</h2>

      <section id="categories-section">
        <article>
          <button>Periféricos</button>
        </article>

        <article>
          <button>Componentes</button>
        </article>

        <article>
          <button>Controladores</button>
        </article>
      </section>

      <ContadorContainer />
    </main>
  );
}

export default Main;
