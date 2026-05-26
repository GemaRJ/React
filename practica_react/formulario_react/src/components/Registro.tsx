import { useState } from 'react';
import PreviewCard from './PreviewCard';

function Registro() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    pass: '',
    conf: ''
  });

  const guardar = () => {
    if (form.nombre.trim() === '') return alert('El nombre es obligatorio');
    if (!form.correo.includes('@')) return alert('Correo inválido');
    if (form.pass.length < 6) return alert('Mínimo 6 caracteres');
    if (form.pass !== form.conf) return alert('Las contraseñas no coinciden');

    const lista = JSON.parse(localStorage.getItem('datos') || '[]');

    lista.push({
      n: form.nombre,
      c: form.correo,
      f: new Date().toLocaleDateString()
    });

    localStorage.setItem('datos', JSON.stringify(lista));

    alert('¡Guardado correctamente!');
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card shadow p-4">
          <h1>Registro</h1>

          <input
            className="form-control mb-2"
            placeholder="Nombre"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />

          <input
            className="form-control mb-2"
            placeholder="Correo electrónico"
            value={form.correo}
            onChange={(e) => setForm({ ...form, correo: e.target.value })}
          />

          <input
            className="form-control mb-2"
            type="password"
            placeholder="Contraseña"
            value={form.pass}
            onChange={(e) => setForm({ ...form, pass: e.target.value })}
          />

          <input
            className="form-control mb-2"
            type="password"
            placeholder="Repetir contraseña"
            value={form.conf}
            onChange={(e) => setForm({ ...form, conf: e.target.value })}
          />

          <button className="btn btn-primary mt-2 w-100" onClick={guardar}>
            Guardar
          </button>
        </div>
      </div>

      <div className="col-md-6">
        <PreviewCard
          nombre={form.nombre}
          correo={form.correo}
        />
      </div>
    </div>
  );
}

export default Registro;