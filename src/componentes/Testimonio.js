import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio(props) {
 return (
 <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
             src={require(`../imagenes/testimonio-${props.imagen}.png`)}
             alt= {props.imagen}/>
       <div className="contenedor-texto-testimonio">
       <p className="nombre testimonio">
       <strong>{props.nombre}</strong> en {props.pais}</p>
       <p className="cargo-Testimonio">
       {props.cargo} en <strong>{props.empresa}</strong></p>
      <p className="texto-testimonio">"{props.testimonio} <strong>{props.habilidades}</strong>{props.habilidadestexto}"</p>     
     </div>
 </div>
 );

} 
export default Testimonio;