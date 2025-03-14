import React, { useState } from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from "../Botao/Botao";

const Formulario = (props) => {

    const areas = [
        'Progr. Básica',
        'Progr. Web',
        'Banco de Dados',
        'Diversos'
    ]

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [area, setArea] = useState('Progr. Básica');

    function onSave(event){
        event.preventDefault();
        props.onProfSubmition({
            "name": name,
            "title": title,
            "image": image,
            "area": area
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={onSave}>
                <h2>Dados do Professor:</h2>
                <CampoTexto    
                    label="Nome" 
                    placeholder="Digite seu nome"
                    onChange={value => setName(value)}
                />
                <CampoTexto 
                    label="Título" 
                    placeholder="Digite seu título"
                    onChange={value => setTitle(value)}    
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    onChange={value => setImage(value)}
                />
                <ListaSuspensa 
                    label="Áreas"  
                    itens={areas}
                    onChange={value => setArea(value)}    
                />
                <Botao text="Criar professor"/>
            </form>
        </section>
    )

}

export default Formulario