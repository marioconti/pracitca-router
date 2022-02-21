import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>Aplications</h1>
      {/* Link es básicamente un anchor q evita refrescar la página */}
      <Link to="/users">usuarios</Link>
    </div>
  );
};
