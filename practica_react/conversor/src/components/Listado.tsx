export default function Listado() {
  const monedas = ["Euro", "Dólar", "Libra", "Yen", "Peso", "Franco"];

  return (
    <div>
      <h2>Listado de monedas</h2>

      <ul className="list-group">
        {monedas.map((moneda, index) => (
          <li className="list-group-item" key={index}>
            {moneda}
          </li>
        ))}
      </ul>
    </div>
  );
}