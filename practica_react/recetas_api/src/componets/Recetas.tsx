import { useEffect, useState } from "react";

import { getTags, getRecetas } from "../services/api";

export default function Recetas() {

  const [tags, setTags] = useState<string[]>([]);

  const [tagSeleccionado, setTagSeleccionado] =
    useState("");

  const [recetas, setRecetas] = useState<any[]>([]);

  useEffect(() => {

    getTags().then((data) => {

      setTags(data);

      setTagSeleccionado(data[0]);

      buscarRecetas(data[0]);

    });

  }, []);

  const buscarRecetas = (tag: string) => {

    setTagSeleccionado(tag);

    getRecetas(tag).then((data) => {

      setRecetas(data.recipes);

    });

  };

  return (
    <div className="container mt-4">

      <h1>Recetas por etiqueta</h1>

      <select
        className="form-select mb-4"
        value={tagSeleccionado}
        onChange={(e) =>
          buscarRecetas(e.target.value)
        }
      >

        {tags.map((tag, index) => (

          <option value={tag} key={index}>
            {tag}
          </option>

        ))}

      </select>

      <div className="row">

        {recetas.map((receta) => (

          <div
            className="col-md-4 mb-3"
            key={receta.id}
          >

            <div className="card h-100">

              <img
                src={receta.image}
                className="card-img-top"
                alt="receta"
              />

              <div className="card-body">

                <h5 className="card-title">
                  {receta.name}
                </h5>

                <p className="card-text">
                  Dificultad: {receta.difficulty}
                </p>

                <p className="card-text">
                  Tiempo: {receta.prepTimeMinutes} minutos
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}