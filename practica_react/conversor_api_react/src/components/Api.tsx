import { useEffect, useState } from 'react';

export default function Api() {
  const [cantidad, setCantidad] = useState(1);
  const [destino, setDestino] = useState('USD');
  const [tasas, setTasas] = useState<any>({});
  const [resultado, setResultado] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/EUR')
      .then(res => res.json())
      .then(data => {
        setTasas(data.rates);
      });
  }, []);

  const convertir = () => {
    setResultado(cantidad * tasas[destino]);
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '400px' }}>
      <h2>Conversor de monedas</h2>

      <input
        type="number"
        className="form-control mb-2"
        value={cantidad}
        onChange={e => setCantidad(Number(e.target.value))}
      />

      <select
        className="form-select mb-2"
        value={destino}
        onChange={e => setDestino(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="AUD">AUD</option>
        <option value="CAD">CAD</option>
      </select>

      <button className="btn btn-primary w-100" onClick={convertir}>
        Convertir
      </button>

      {resultado !== null && (
        <div className="alert alert-success mt-3">
          Resultado: {resultado.toFixed(2)} {destino}
        </div>
      )}
    </div>
  );
}