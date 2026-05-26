import { useEffect, useState } from "react";

import { getPaises } from "../services/Api";

export default function Pais() {

  const [paises, setPaises] = useState<any[]>([]);

  useEffect(() => {

    getPaises().then((data: any[]) => {

      setPaises(data);

    });

  }, []);

  const getIdiomas = (languages: any) => {

    return Object.values(languages);

  };

  return (
    <div className="container mt-4">

      <h1>Listado de países</h1>

      <div className="row">

        {paises.map((pais, index) => (

          <div className="col-md-4 mb-3" key={index}>

            <div className="card h-100">

              <img
                src={pais.flags.png}
                className="card-img-top"
                alt="bandera"
              />

              <div className="card-body">

                <h5 className="card-title">
                  {pais.name.common}
                </h5>

                <h6>Idiomas:</h6>

                <ul>

                  {getIdiomas(pais.languages).map((idioma, index) => (

                    <li key={index}>
                      {String(idioma)}
                    </li>

                  ))}

                </ul>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

