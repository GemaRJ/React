import { useState } from "react";
import Calculadora from "./components/Calculadora";
import Listado from "./components/Listado";

function App() {

const [pantalla, setPantalla] = useState("calculadora");

return (
<div>

<nav className="navbar navbar-dark bg-dark px-3">

<span className="navbar-brand">
App React
</span>

<div>

<button
className="btn btn-outline-light me-2"
onClick={() => setPantalla("calculadora")}
>
Calculadora
</button>

<button
className="btn btn-outline-light"
onClick={() => setPantalla("listado")}
>
Listado
</button>

</div>

</nav>

{pantalla === "calculadora" && <Calculadora />}
{pantalla === "listado" && <Listado />}

</div>
);

}

export default App;