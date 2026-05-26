export default function Listado() {

  const alimentos = [
    "Manzana",
    "Plátano",
    "Arroz",
    "Pollo",
    "Pasta",
    "Yogur"
  ];

  return (
    <div>

      <h2>Listado de alimentos</h2>

      <ul className="list-group">

        {alimentos.map((alimento, index) => (

          <li
            className="list-group-item"
            key={index}
          >
            {alimento}
          </li>

        ))}

      </ul>

    </div>
  );
}