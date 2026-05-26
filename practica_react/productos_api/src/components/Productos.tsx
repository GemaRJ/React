import { useEffect, useState } from "react";
import { getProductos } from "../services/Api";

export default function Productos() {

const [productos, setProductos] = useState<any[]>([]);

useEffect(() => {

getProductos().then((data) => {
setProductos(data);
});

}, []);

return (
<div className="container mt-4">

<h1 className="text-center mb-4">
Productos API React
</h1>

<div className="row">

{productos.map((producto) => (

<div className="col-md-4 mb-3" key={producto.id}>

<div className="card h-100">

<img
src={producto.image}
className="card-img-top p-3"
style={{
height: "180px",
objectFit: "contain"
}}
/>

<div className="card-body">

<h5>{producto.title}</h5>

<p className="fw-bold">
{producto.price} €
</p>

<p>{producto.category}</p>

</div>

</div>

</div>

))}

</div>

</div>
);

}