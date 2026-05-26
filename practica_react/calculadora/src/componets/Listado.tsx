export default function Listado() {

  const nombres = [
    "Ana",
    "Luis",
    "Marta",
    "Carlos",
    "Lucía",
    "Pedro"
  ];

  return (
    <div>

      <h2>Listado de nombres</h2>

      <ul className="list-group">

        {nombres.map((nombre, index) => (

          <li
            className="list-group-item"
            key={index}
          >
            {nombre}
          </li>

        ))}

      </ul>

    </div>
  );
}