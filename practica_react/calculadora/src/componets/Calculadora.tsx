import { useState } from "react";

export default function Calculadora() {

  const [numero1, setNumero1] = useState("");

  const [numero2, setNumero2] = useState("");

  const [resultado, setResultado] = useState("");

  const [historial, setHistorial] = useState<string[]>([]);

  const calcular = (operacion: string) => {

    const n1 = Number(numero1);

    const n2 = Number(numero2);

    let total = 0;

    if (operacion === "+") {
      total = n1 + n2;
    }

    if (operacion === "-") {
      total = n1 - n2;
    }

    if (operacion === "*") {
      total = n1 * n2;
    }

    if (operacion === "/") {
      total = n1 / n2;
    }

    setResultado(String(total));

    setHistorial([
      ...historial,
      `${n1} ${operacion} ${n2} = ${total}`
    ]);

  };

  return (
    <div>

      <h2>Calculadora</h2>

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Número 1"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Número 2"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />

      <button
        className="btn btn-success me-2"
        onClick={() => calcular("+")}
      >
        +
      </button>

      <button
        className="btn btn-danger me-2"
        onClick={() => calcular("-")}
      >
        -
      </button>

      <button
        className="btn btn-warning me-2"
        onClick={() => calcular("*")}
      >
        *
      </button>

      <button
        className="btn btn-info"
        onClick={() => calcular("/")}
      >
        /
      </button>

      <h3 className="mt-3">
        Resultado: {resultado}
      </h3>

      <ul className="list-group mt-3">

        {historial.map((item, index) => (

          <li
            className="list-group-item"
            key={index}
          >
            {item}
          </li>

        ))}

      </ul>

    </div>
  );
}