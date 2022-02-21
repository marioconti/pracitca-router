import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

export const DashBoard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    //   Navigate puede ser util para redirección después que se cargó una pagina, como link, etc.
    navigate("/");
  };

  return (
    <div>
      <h1>DashBoard</h1>
      <button onClick={handleClick}>Logout</button>
      <br />
      <Link to="Welcome">say welcome</Link>
      <br />
      <Link to="goodbye">say goodbye</Link>
      {/* Outlet lo que hace es indicar donde irán los sub componentes, al final, al comienzo, después de tal o cual */}
      <Outlet/>
    </div>
  );
};
