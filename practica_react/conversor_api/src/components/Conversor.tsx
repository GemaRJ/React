import { useEffect, useState } from "react";
import { getMonedas, getNombresMonedas } from "../services/api";

export default function ConversorApi() {

const [cantidad, setCantidad] = useState("");
const [moneda, setMoneda] = useState("");
const [tasas, setTasas] = useState<any>({});
const [nombres, setNombres] = useState<any>({});
const [resultado, setResultado] = useState("");
const [historial, setHistorial] = useState<string[]>([]);

useEffect(() => {

getNombresMonedas().then((datos: any) => {
setNombres(datos);
});

getMonedas().then((datos: any) => {

setTasas(datos.eur);

const monedas = Object.keys(datos.eur);

if (monedas.length > 0) {
setMoneda(monedas[0]);
}

});

}, []);

const convertir = () => {

if (cantidad === "") {
alert("Debes escribir una cantidad");
return;
}

const total = Number(cantidad) * tasas[moneda];

const texto = `${cantidad} € = ${total.toFixed(2)} ${nombres[moneda]}`;

setResultado(texto);

setHistorial([
...historial,
texto
]);

setCantidad("");

};

return (
<div className="container mt-4" style={{ maxWidth: "500px" }}>

<h2 className="text-center mb-4">
Conversor API
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

{Object.keys(tasas).map((codigo) => (

<option key={codigo} value={codigo}>
${nombres[codigo]} (${codigo.toUpperCase()})
</option>

))}

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