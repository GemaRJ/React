import { useState } from "react";
import Conversor from "./components/Conversor";
import Listado from "./components/Listado";

export default function App() {
  const [pagina, setPagina] = useState("conversor");

  return (
    <div className="container mt-4">
      <button className="btn btn-primary me-2" onClick={() => setPagina("conversor")}>
        Conversor
      </button>

      <button className="btn btn-secondary me-2" onClick={() => setPagina("listado")}>
        Listado
      </button>

      {pagina === "conversor" ? <Conversor /> : <Listado />}
    </div>
  );
}