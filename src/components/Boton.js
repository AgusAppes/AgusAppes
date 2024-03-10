import React from "react";

function Boton ({texto, action}) {
    return(

        <button className="btnShow" onClick={action}><span>{texto}</span></button>
    )

}

export default Boton;