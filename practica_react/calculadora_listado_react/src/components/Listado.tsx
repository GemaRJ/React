export default function Listado() {
  const nombres = ["Ana", "Juan", "María", "Pedro", "Lucía"];

  return (
    <div className="container mt-4" style={{ maxWidth: '300px' }}>
      <ul className="list-group">
        {nombres.map((n, i) => (
          <li key={i} className="list-group-item">{n}</li>
        ))}
      </ul>
    </div>
  );
}