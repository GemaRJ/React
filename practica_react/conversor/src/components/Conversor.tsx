import { useState } from "react";

export default function Conversor() {
  const [euros, setEuros] = useState("");
  const [moneda, setMoneda] = useState("dolar");
  const [resultado, setResultado] = useState("");
  const [historial, setHistorial] = useState<string[]>([]);

  const convertir = () => {
    const cantidad = Number(euros);
    let total = 0;
    let nombreMoneda = "";

    if (moneda === "dolar") {
      total = cantidad * 1.1;
      nombreMoneda = "dólares";
    }

    if (moneda === "libra") {
      total = cantidad * 0.85;
      nombreMoneda = "libras";
    }

    setResultado(String(total));

    setHistorial([
      ...historial,
      `${cantidad} euros = ${total} ${nombreMoneda}`
    ]);
  };

  return (
    <div>
      <h2>Conversor de monedas</h2>

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Euros"
        value={euros}
        onChange={(e) => setEuros(e.target.value)}
      />

      <select
        className="form-select mb-2"
        value={moneda}
        onChange={(e) => setMoneda(e.target.value)}
      >
        <option value="dolar">Dólar</option>
        <option value="libra">Libra</option>
      </select>

      <button className="btn btn-success" onClick={convertir}>
        Convertir
      </button>

      <h3 className="mt-3">
        Resultado: {resultado}
      </h3>

      <ul className="list-group mt-3">
        {historial.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}