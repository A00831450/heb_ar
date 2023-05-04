import React, { useState, useEffect } from "react";
import AppBar from "../../common/AppBar/AppBar";
import NavBar from "../../common/NavBar/NavBar";
import { Titulo } from "./CuponesStyled";
import './Cupones.css';
import Info from "../../assets/icons/info.svg";
import CuponImg from "../../assets/imgs/coupon.svg";
import HebIMG from "../../assets/imgs/logo.svg";

function Cupones() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(43);

  return (
    <>
      <AppBar />
      <div className="container">
        <Titulo>Cupones por tiempo</Titulo>
        <div className="Tiempo">
          <img src={Info} className="InfoSvg" />
          <h1 className="TimeVar">{minutes + ":" + seconds}</h1>
        </div>
        <div className="CuponesLayout">
          <div className="cupon">
            <div className="NivelCupon">
              <h1>Nivel 1</h1>
            </div>
            <div className="cupon-info">
              <img src={CuponImg} alt="Cupon" className="cupon-img" />
              <img src={HebIMG} alt="HEB" className="heb-img" />
              {/* <p>5% de descuento en la compra de un paquete de tortillas de maiz de marcas HEB</p> */}
            </div>
          </div>
        </div>
      </div>
      <NavBar pagina={'cupones'} />
    </>
  );
}

export default Cupones;
