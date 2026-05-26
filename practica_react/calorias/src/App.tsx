import { useState } from "react";
import Calorias from "./components/Calorias";
import Listado from "./components/Listado";

export default function App() {
  const [pagina, setPagina] = useState("calorias");

  return (
    <div className="container mt-4">

      <nav className="mb-4">
        <button
          className="btn btn-primary me-2"
          onClick={() => setPagina("calorias")}
        >
          Calculador
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => setPagina("listado")}
        >
          Listado
        </button>
      </nav>

      {pagina === "calorias" && <Calorias />}

      {pagina === "listado" && <Listado />}

    </div>
  );
}