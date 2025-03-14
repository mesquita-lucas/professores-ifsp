import React from "react";
import './Area.css';
import Professor from "../Professor/Professor";

const Area = (props) => {

    if(props.professors.length > 0) {
        return (

            <section className="area" style={ {backgroundColor:props.secondaryColor} }>
                <h3 style={ {borderColor: props.primaryColor} }>{props.name}</h3>
                
                <div className="professores">
                    {props.professors.map( prof => <Professor 
                                                key={prof.name}
                                                name={prof.name}
                                                title={prof.title}
                                                image={prof.image} /> )}
                </div>
            </section>
        )
    } else {
        return null;
    }
}

export default Area