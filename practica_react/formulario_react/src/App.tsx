import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registro from './components/Registro';
import VistaPrevia from './components/VistaPrevia';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f4f7f6' }}>
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4 shadow">
          <div className="container">
            <span className="navbar-brand fw-bold">UserApp</span>
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Formulario</Link>
              <Link className="nav-link" to="/vista-previa">Perfil Guardado</Link>
            </div>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Registro />} />
            <Route path="/vista-previa" element={<VistaPrevia />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;