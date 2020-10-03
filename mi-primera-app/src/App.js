import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HolaMundo, { AdiosMundo } from "./components/HolaMundo";
import Saludar from "./components/Saludar";

function App() {
  //QUEDE POR 27.
  // Pasando variables y objetos entre componentes por los props
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo />
        <AdiosMundo />

        <Saludar name="Victor" edad="36" />
        <Saludar name="Paco" edad="46" />
        <Saludar name="Cristian" />
        
      </header>
    </div>
  );
}

export default App;
