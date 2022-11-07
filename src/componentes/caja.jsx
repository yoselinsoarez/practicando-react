import React from "react";
import "../estilos/caja.css";


function Cajas(){
    return(
        <div className="contenedor de texto">
            <img className= "contenedorImagen"
            src={require("../imagenes/Disneyworld.jpg")
        } alt= "Foto de disney"
         />
         <h2 className= "contenedorTitulo">Parques de diversiones
         </h2>
         <p className= "contenedorParrafo"> Aqui se presentan 
         algnos de los mejores parques de diversiones del mundo.
         </p>
         <button
          className="botonDeInfo">
            Ver mas informacion
          </button>
    
         
    
        


        </div>
    );
}
export default Cajas;
