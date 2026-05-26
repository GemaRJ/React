import { useState } from "react";

export default function Temperatura() {

const [temperatura, setTemperatura] = useState("");
const [unidad, setUnidad] = useState("fahrenheit");
const [resultado, setResultado] = useState("");
const [historial, setHistorial] = useState<string[]>([]);

const convertir = () => {

const celsius = Number(temperatura);

if (temperatura === "") {
alert("Debes escribir una temperatura");
return;
}

let total = 0;
let simbolo = "";

if (unidad === "fahrenheit") {
total = celsius * 1.8 + 32;
simbolo = "ºF";
} else if (unidad === "kelvin") {
total = celsius + 273.15;
simbolo = "K";
}

setResultado(`${total.toFixed(2)} ${simbolo}`);

setHistorial([
...historial,
`${celsius} ºC = ${total.toFixed(2)} ${simbolo}`
]);

setTemperatura("");

};

return (
<div className="container mt-4" style={{ maxWidth: "500px" }}>

<h2 className="text-center mb-4">Conversor de Temperatura</h2>

<input
type="number"
className="form-control mb-3"
placeholder="Temperatura en Celsius"
value={temperatura}
onChange={(e) => setTemperatura(e.target.value)}
/>

<select className="form-select mb-3" value={unidad} onChange={(e) => setUnidad(e.target.value)}>
<option value="fahrenheit">Fahrenheit</option>
<option value="kelvin">Kelvin</option>
</select>

<button className="btn btn-primary w-100" onClick={convertir}>
Convertir
</button>

<h3 className="text-center mt-4">Resultado: {resultado}</h3>

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