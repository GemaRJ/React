import { useState } from "react";
import Temperatura from "./components/Temperatura";
import Listado from "./components/Listado";

function App() {

const [pantalla, setPantalla] = useState("temperatura");

return (
<div>

<nav className="navbar navbar-dark bg-dark px-3">

<span className="navbar-brand">App React</span>

<div>

<button className="btn btn-outline-light me-2" onClick={() => setPantalla("temperatura")}>
Temperatura
</button>

<button className="btn btn-outline-light" onClick={() => setPantalla("listado")}>
Listado
</button>

</div>

</nav>

{pantalla === "temperatura" && <Temperatura />}
{pantalla === "listado" && <Listado />}

</div>
);

}

export default App;