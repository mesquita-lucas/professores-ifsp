import React, { useState } from "react";
import './CampoTexto.css'

const CampoTexto = (props) => {

    function onDigit(event){
        props.onChange(event.target.value);
    }

    return (

        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={onDigit} placeholder={props.placeholder}/>
        </div>

    )
}

export default CampoTexto;