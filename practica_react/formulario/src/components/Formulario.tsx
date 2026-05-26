import { useState } from "react";

interface Props {
usuarios: any[];
setUsuarios: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function Formulario({
usuarios,
setUsuarios
}: Props) {

const [nombre, setNombre] = useState("");
const [correo, setCorreo] = useState("");
const [password, setPassword] = useState("");
const [fecha, setFecha] = useState("");
const [mensaje, setMensaje] = useState("");

const guardarUsuario = () => {

if (
nombre === "" ||
correo === "" ||
password === "" ||
fecha === "" ||
mensaje === ""
) {

alert("Debes rellenar todos los campos");
return;

}

const nuevoUsuario = {
nombre,
correo,
password,
fecha,
mensaje
};

setUsuarios([
...usuarios,
nuevoUsuario
]);

setNombre("");
setCorreo("");
setPassword("");
setFecha("");
setMensaje("");

};

return (
<div>

<h2 className="text-center mb-4">
Formulario
</h2>

<input
type="text"
className="form-control mb-3"
placeholder="Nombre"
value={nombre}
onChange={(e) => setNombre(e.target.value)}
/>

<input
type="email"
className="form-control mb-3"
placeholder="Correo"
value={correo}
onChange={(e) => setCorreo(e.target.value)}
/>

<input
type="password"
className="form-control mb-3"
placeholder="Contraseña"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>

<input
type="date"
className="form-control mb-3"
value={fecha}
onChange={(e) => setFecha(e.target.value)}
/>

<textarea
className="form-control mb-3"
placeholder="Mensaje"
value={mensaje}
onChange={(e) => setMensaje(e.target.value)}
/>

<button
className="btn btn-primary w-100 mb-4"
onClick={guardarUsuario}
>
Guardar
</button>

{usuarios.map((usuario, index) => (

<div className="card mb-3" key={index}>

<div className="card-body">

<h5>{usuario.nombre}</h5>

<p>
<strong>Correo:</strong> {usuario.correo}
</p>

<p>
<strong>Contraseña:</strong> {usuario.password}
</p>

<p>
<strong>Fecha:</strong> {usuario.fecha}
</p>

<p>
<strong>Mensaje:</strong> {usuario.mensaje}
</p>

</div>

</div>

))}

</div>
);

}