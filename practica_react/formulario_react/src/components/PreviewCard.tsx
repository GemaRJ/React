function PreviewCard(props: any) {
  return (
    <div className="card shadow p-4">
      <h2>Vista previa en vivo</h2>

      <p>
        <strong>Nombre:</strong> {props.nombre}
      </p>

      <p>
        <strong>Correo:</strong> {props.correo}
      </p>
    </div>
  );
}

export default PreviewCard;