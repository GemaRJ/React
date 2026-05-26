import { useState, useEffect } from 'react';

function VistaPrevia() {
  const [lista, setLista] = useState<any[]>([]);

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem('datos') || '[]');
    setLista(datos);
  }, []);

  return (
    <div className="card shadow p-4">
      <h2>Usuarios registrados</h2>

      {lista.length === 0 ? (
        <p>No hay usuarios guardados.</p>
      ) : (
        <ul className="list-group">
          {lista.map((u: any, i: number) => (
            <li className="list-group-item" key={i}>
              <strong>{u.n}</strong> - {u.c} - <small>{u.f}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default VistaPrevia;