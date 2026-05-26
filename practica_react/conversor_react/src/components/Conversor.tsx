import { useState } from 'react';

// Tasas de conversión fijas
const TASAS: Record<string, number> = {
  "EUR-USD": 1.10,
  "EUR-GBP": 0.86,
  "USD-EUR": 0.91,
  "USD-GBP": 0.78,
  "GBP-EUR": 1.16,
  "GBP-USD": 1.28,
};

interface Registro {
  id: number;
  texto: string;
}

function Conversor() {
  const [cantidad, setCantidad] = useState<string>("");
  const [origen, setOrigen] = useState<string>("EUR");
  const [destino, setDestino] = useState<string>("USD");
  const [historial, setHistorial] = useState<Registro[]>([]);

  const calcular = () => {
    const num = parseFloat(cantidad);
    
    if (isNaN(num) || num <= 0) {
      alert("Introduce una cantidad válida");
      return;
    }

    let resultado: number;
    if (origen === destino) {
      resultado = num;
    } else {
      const clave = `${origen}-${destino}`;
      resultado = num * TASAS[clave];
    }

    const nuevoRegistro: Registro = {
      id: Date.now(),
      texto: `${num} ${origen} ➔ ${resultado.toFixed(2)} ${destino}`,
    };

    setHistorial([nuevoRegistro, ...historial]);
    setCantidad("");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        
        {/* Columna del Formulario */}
        <div className="col-md-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h4 className="card-title text-center mb-4">Conversor Divisas</h4>
              
              <div className="mb-3">
                <label className="form-label fw-bold">Cantidad</label>
                <input
                  type="number"
                  className="form-control"
                  value={cantidad}
                  onChange={(e) => setCantidad(e.target.value)}
                  placeholder="Ej: 100"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">De:</label>
                <select className="form-select" value={origen} onChange={(e) => setOrigen(e.target.value)}>
                  <option value="EUR">EUR - Euro</option>
                  <option value="USD">USD - Dólar</option>
                  <option value="GBP">GBP - Libra</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">A:</label>
                <select className="form-select" value={destino} onChange={(e) => setDestino(e.target.value)}>
                  <option value="USD">USD - Dólar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - Libra</option>
                </select>
              </div>

              <button onClick={calcular} className="btn btn-primary w-100 fw-bold">
                Convertir
              </button>
            </div>
          </div>
        </div>

        {/* Columna del Historial */}
        <div className="col-md-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="m-0">Historial</h5>
                <button 
                  className="btn btn-sm btn-link text-danger text-decoration-none" 
                  onClick={() => setHistorial([])}
                >
                  Limpiar
                </button>
              </div>
              
              <ul className="list-group list-group-flush">
                {historial.length === 0 ? (
                  <li className="list-group-item text-center text-muted border-0">Sin registros</li>
                ) : (
                  historial.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <span className="font-monospace">{item.texto}</span>
                      <span className="badge bg-info text-dark rounded-pill">OK</span>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Conversor;

