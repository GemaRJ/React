import { useState } from "react";
import Swal from "sweetalert2";

export default function Calorias() {
  const [alimento, setAlimento] = useState("");
  const [calorias, setCalorias] = useState("");
  const [total, setTotal] = useState(0);
  const [lista, setLista] = useState<string[]>([]);

  const agregar = () => {
    const numero = Number(calorias);

    if (alimento === "" || calorias === "" || numero <= 0) {
      Swal.fire("Error", "Rellena los campos", "error");
      return;
    }

    setLista([...lista, `${alimento} - ${numero} kcal`]);

    setTotal((anterior) => anterior + numero);

    setAlimento("");
    setCalorias("");
  };

  return (
    <div>
      <h2>Calculador de calorías</h2>

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Alimento"
        value={alimento}
        onChange={(e) => setAlimento(e.target.value)}
      />

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Calorías"
        value={calorias}
        onChange={(e) => setCalorias(e.target.value)}
      />

      <button className="btn btn-success" onClick={agregar}>
        Añadir
      </button>

      <h3 className="mt-3">Total: {total} kcal</h3>

      <ul className="list-group mt-3">
        {lista.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}