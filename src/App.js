import React from "react";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Services from "./components/Servicios";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Inicio/>
      <Services/>
      <Galeria />
      <Footer />
    </div>
  );
}

export default App;
