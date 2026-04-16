export const obtenerLibros = async () => {
  const res = await fetch('https://stephen-king-api.onrender.com/api/books');

  if (!res.ok) {
    throw new Error('Error al cargar libros');
  }

  const data = await res.json();
  return data.data;
};