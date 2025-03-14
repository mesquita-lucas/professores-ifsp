import React, { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Lista from './components/Lista/Lista';

function App() {

  const [professors, setProfessors] = useState([]);

  function addProfessor(prof) {
    const newList = professors.slice();

    newList.push(prof);

    setProfessors(newList);
    
    console.log(prof);
  }

  return (
    <div>
      <Banner />
      <Formulario onProfSubmition={prof => addProfessor(prof)} />
      <Lista objects={professors}/>
    </div>
  );
}

export default App;
