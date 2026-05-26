import { useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {

const [pantalla, setPantalla] = useState("formulario");
const [usuarios, setUsuarios] = useState<any[]>([]);

return (
<div>

<nav className="navbar navbar-dark bg-dark px-3">

<span className="navbar-brand">
App React
</span>

<div>

<button
className="btn btn-outline-light me-2"
onClick={() => setPantalla("formulario")}
>
Formulario
</button>

<button
className="btn btn-outline-light"
onClick={() => setPantalla("listado")}
>
Listado
</button>

</div>

</nav>

<div className="container mt-4" style={{ maxWidth: "700px" }}>

{pantalla === "formulario" && (
<Formulario
usuarios={usuarios}
setUsuarios={setUsuarios}
/>
)}

{pantalla === "listado" && (
<Listado usuarios={usuarios} />
)}

</div>

</div>
);

}

export default App;