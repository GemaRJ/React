import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tareas from './components/Tareas';
import Listado from './components/Listado';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <nav className="navbar navbar-expand navbar-dark bg-success mb-4 shadow-sm">
          <div className="container">
            <span className="navbar-brand fw-bold">Tareas</span>
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Nueva Tarea</Link>
              <Link className="nav-link" to="/lista">Ver Listado</Link>
            </div>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Tareas />} />
            <Route path="/lista" element={<Listado />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
