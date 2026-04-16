import { useEffect, useState } from 'react';
import Libro from './components/Libros';
import { obtenerLibros } from './services/Api';

function App() {
  const [libros, setLibros] = useState<any[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    obtenerLibros()
      .then((data) => {
        setLibros(data);
        setCargando(false);
      })
      .catch(() => {
        setError('No se pudieron cargar los libros');
        setCargando(false);
      });
  }, []);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Libros de Stephen King</h1>

      {cargando && <p className="text-center">Cargando libros...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      <div className="row g-4">
        {libros.map((libro, i) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
            <Libro libro={libro} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;