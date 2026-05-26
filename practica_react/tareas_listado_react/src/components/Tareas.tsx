import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormularioTarea() {
  const [texto, setTexto] = useState('');
  const navigate = useNavigate();

  const guardar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!texto.trim()) return;

    // 1. Recuperamos lo que ya hay
    const existentes = JSON.parse(localStorage.getItem('tareas') || '[]');
    // 2. Añadimos la nueva
    const nuevas = [...existentes, { id: Date.now(), texto }];
    // 3. Guardamos
    localStorage.setItem('tareas', JSON.stringify(nuevas));
    
    // 4. Vamos al listado automáticamente
    navigate('/lista');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card p-4 shadow-sm border-0">
          <h3 className="mb-3">Añadir Tarea</h3>
          <form onSubmit={guardar}>
            <input 
              className="form-control mb-3" 
              placeholder="Escribe tu tarea..." 
              value={texto} 
              onChange={e => setTexto(e.target.value)} 
            />
            <button className="btn btn-success w-100">Guardar Tarea</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormularioTarea;