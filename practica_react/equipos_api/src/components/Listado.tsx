import { useEffect, useState } from "react";
import { getEquipos } from "../services/api";

export default function Listado() {

const [equipos, setEquipos] = useState<any[]>([]);

useEffect(() => {

getEquipos().then((data: any) => {

setEquipos(data.teams);

});

}, []);

return (
<div className="container mt-4">

<h1 className="text-center mb-4">
Equipos Mundial
</h1>

<div className="row">

{equipos.map((equipo, index) => (

<div className="col-md-4 mb-4" key={index}>

<div className="card h-100">

<img
src={equipo.strBadge}
className="card-img-top p-3"
style={{ height: "180px", objectFit: "contain" }}
/>

<div className="card-body">

<h5 className="card-title">
{equipo.strTeam}
</h5>

<p>
<strong>País:</strong> {equipo.strCountry}
</p>

<p>
<strong>Estadio:</strong> {equipo.strStadium}
</p>

</div>

</div>

</div>

))}

</div>

</div>
);

}