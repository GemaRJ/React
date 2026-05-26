import { useState } from "react";
import Conversor from "./components/Conversor";
import Listado from "./components/Listado";

function App() {

const [pantalla, setPantalla] = useState("conversor");

return (
<div>

<nav className="navbar navbar-dark bg-dark px-3">

<span className="navbar-brand">
App React
</span>

<div>

<button
className="btn btn-outline-light me-2"
onClick={() => setPantalla("conversor")}
>
Conversor
</button>

<button
className="btn btn-outline-light"
onClick={() => setPantalla("listado")}
>
Listado
</button>

</div>

</nav>

{pantalla === "conversor" && <Conversor />}
{pantalla === "listado" && <Listado />}

</div>
);

}

export default App;