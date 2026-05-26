interface Props {
usuarios: any[];
}

export default function Listado({
usuarios
}: Props) {

return (
<div>

<h2 className="text-center mb-4">
Listado
</h2>

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