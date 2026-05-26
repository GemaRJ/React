import { useState } from "react";
import Calculadora from "./componets/Calculadora";
import Listado from "./componets/Listado";

export default function App() {

  const [pagina, setPagina] = useState("calculadora");

  return (
    <div className="container mt-4">

      <button
        className="btn btn-primary me-2"
        onClick={() => setPagina("calculadora")}
      >
        Calculadora
      </button>

      <button
        className="btn btn-secondary me-2"
        onClick={() => setPagina("listado")}
      >
        Listado
      </button>

      {pagina === "calculadora"
        ? <Calculadora />
        : <Listado />
      }

    </div>
  );
}