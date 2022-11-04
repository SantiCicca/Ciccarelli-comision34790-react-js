import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <ItemListContainer mensaje="Aguante CoderHouse!"/>
      <Footer />
    </>
  );
}

export default App;
