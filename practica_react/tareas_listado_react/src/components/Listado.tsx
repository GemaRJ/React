import { useState, useEffect } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState<{id: number, texto: string}[]>([]);

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem('tareas') || '[]');
    setTareas(datos);
  }, []);

  const borrar = (id: number) => {
    const filtradas = tareas.filter(t => t.id !== id);
    setTareas(filtradas);
    localStorage.setItem('tareas', JSON.stringify(filtradas));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h3 className="mb-3 text-center">Mis Tareas</h3>
        <div className="list-group shadow-sm">
          {tareas.length === 0 ? (
            <div className="list-group-item text-center">No hay tareas</div>
          ) : (
            tareas.map(t => (
              <div key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
                {t.texto}
                <button className="btn btn-sm btn-danger" onClick={() => borrar(t.id)}>Borrar</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ListaTareas;