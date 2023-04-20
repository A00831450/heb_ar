import React from "react";
import AppBar from "../../common/AppBar/AppBar";
import NavBar from "../../common/NavBar/NavBar";

function Perfil() {
  return (
    <>
      <AppBar />
      <div className="container">
        <h1>Perfil</h1>
        <button>Person</button>
      </div>
      <NavBar pagina={'perfil'}/>
    </>
  );
}

export default Perfil;
