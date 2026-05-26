export default function Listado() {

const nombres = [
"Ana",
"Luis",
"María",
"Carlos",
"Laura",
"Pedro"
];

return (
<div className="container mt-4" style={{ maxWidth: "500px" }}>

<h2 className="text-center mb-4">
Listado de nombres
</h2>

<ul className="list-group">

{nombres.map((nombre, index) => (

<li className="list-group-item" key={index}>
{nombre}
</li>

))}

</ul>

</div>
);

}