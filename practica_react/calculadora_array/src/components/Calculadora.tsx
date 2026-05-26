import { useState } from "react";

export default function Calculadora() {

const [num1, setNum1] = useState("");
const [num2, setNum2] = useState("");
const [resultado, setResultado] = useState("");
const [historial, setHistorial] = useState<string[]>([]);

const calcular = (operacion: string) => {

const n1 = Number(num1);
const n2 = Number(num2);

if (num1 === "" || num2 === "") {

alert("Debes escribir los dos números");
return;

}

let total = 0;
let signo = "";

if (operacion === "sumar") {

total = n1 + n2;
signo = "+";

} else if (operacion === "restar") {

total = n1 - n2;
signo = "-";

} else if (operacion === "multiplicar") {

total = n1 * n2;
signo = "*";

} else if (operacion === "dividir") {

if (n2 === 0) {

alert("No se puede dividir entre 0");
return;

}

total = n1 / n2;
signo = "/";

}

setResultado(String(total));

setHistorial([
...historial,
`${n1} ${signo} ${n2} = ${total}`
]);

setNum1("");
setNum2("");

};

return (
<div className="container mt-4" style={{ maxWidth: "500px" }}>

<h2 className="text-center mb-4">
Calculadora
</h2>

<input
type="number"
className="form-control mb-3"
placeholder="Primer número"
value={num1}
onChange={(e) => setNum1(e.target.value)}
/>

<input
type="number"
className="form-control mb-3"
placeholder="Segundo número"
value={num2}
onChange={(e) => setNum2(e.target.value)}
/>

<div className="d-grid gap-2">

<button
className="btn btn-primary"
onClick={() => calcular("sumar")}
>
Sumar
</button>

<button
className="btn btn-secondary"
onClick={() => calcular("restar")}
>
Restar
</button>

<button
className="btn btn-success"
onClick={() => calcular("multiplicar")}
>
Multiplicar
</button>

<button
className="btn btn-warning"
onClick={() => calcular("dividir")}
>
Dividir
</button>

</div>

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