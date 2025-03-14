import React from 'react';
import './Lista.css';

const Lista = (props) => {
    return (
        <div className='lista'>
            <h2>Lista de Professores</h2>

            {
                props.objects.map( (object, index) => (
                    <div key={index}>
                        <strong>Nome:</strong> {object.title} {object.name} {object.area} <br/>
                        <strong>Imagem:</strong> {object.image} <br/>
                    </div>
                ))
            }
        </div>
    )
}

export default Lista