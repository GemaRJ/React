export default function Libro({ libro }: any) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{libro.Title}</h5>

        <p className="card-text">
          <strong>Año:</strong> {libro.Year}
        </p>

        <p className="card-text">
          <strong>Editorial:</strong> {libro.Publisher}
        </p>

        <p className="fw-bold mb-2">Villanos:</p>

        <ul className="mb-0">
          {libro.villains && libro.villains.length > 0 ? (
            libro.villains.map((villano: any, i: number) => (
              <li key={i}>{villano.name}</li>
            ))
          ) : (
            <li>No hay villanos</li>
          )}
        </ul>
      </div>
    </div>
  );
}

