import React from "react";
import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {

    function onChoice(event){
        props.onChange(event.target.value);
    }

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={onChoice}>
                { props.itens.map( item => <option key={item}>{item}</option> ) }
            </select>
        </div>
    )

}

export default ListaSuspensa;