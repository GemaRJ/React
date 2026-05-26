import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculadora from './components/Calculadora';
import Listado from './components/Listado';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-light bg-light mb-4">
        <div className="container">
          <Link className="nav-link" to="/">Calculadora</Link>

          <Link className="nav-link" to="/listado">Listado</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Calculadora />} />

        <Route path="/listado" element={<Listado />} />
      </Routes>
    </Router>
  );
}

export default App;