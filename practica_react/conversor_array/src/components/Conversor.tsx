import { useState } from "react";

export default function Conversor() {

const [cantidad, setCantidad] = useState("");
const [resultado, setResultado] = useState("");
const [historial, setHistorial] = useState<string[]>([]);
const [moneda, setMoneda] = useState("dolar");

const convertir = () => {

const euros = Number(cantidad);

if (cantidad === "") {

alert("Debes escribir una cantidad");
return;

}

let total = 0;
let simbolo = "";

if (moneda === "dolar") {

total = euros * 1.08;
simbolo = "$";

} else if (moneda === "libra") {

total = euros * 0.85;
simbolo = "£";

} else if (moneda === "yen") {

total = euros * 165;
simbolo = "¥";

}

setResultado(`${total.toFixed(2)} ${simbolo}`);

setHistorial([
...historial,
`${euros} € = ${total.toFixed(2)} ${simbolo}`
]);

setCantidad("");

};

return (
<div className="container mt-4" style={{ maxWidth: "500px" }}>

<h2 className="text-center mb-4">
Conversor de Monedas
</h2>

<input
type="number"
className="form-control mb-3"
placeholder="Cantidad en euros"
value={cantidad}
onChange={(e) => setCantidad(e.target.value)}
/>

<select
className="form-select mb-3"
value={moneda}
onChange={(e) => setMoneda(e.target.value)}
>

<option value="dolar">Dólar</option>
<option value="libra">Libra</option>
<option value="yen">Yen</option>

</select>

<button
className="btn btn-primary w-100"
onClick={convertir}
>
Convertir
</button>

<h3 className="text-center mt-4">
Resultado: {resultado}
</h3>

<ul className="list-group mt-4">

{historial.map((item, index) => (

<li className="list-group-item" key={index}>
{item}
</li>

))}

</ul>

</div>
);

}