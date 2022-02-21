import React from "react";
import {useParams} from "react-router-dom"

export const UserPage = () => {

    // Este hoock devuelve un objeto.
    // El objeto tendrá como propiedades los parametros (ej: /:id) que le hayamos pasado a la Route
    const {id} = useParams()

  return (
    <div>
      User <h1>{id}</h1>
    </div>
  );
};
