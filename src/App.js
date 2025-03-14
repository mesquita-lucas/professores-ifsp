import React, { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Area from './components/Area/Area';

function App() {

  const areas = [
    {
      name : 'Progr. Básica',
      primaryColor : '#57c278',
      secondaryColor : '#d9f7e9'
    },
    {
      name : 'Progr. Web',
      primaryColor : '#82cffa',
      secondaryColor : '#e8f8ff'
    },
    {
      name : 'Banco de Dados',
      primaryColor : '#a6d157',
      secondaryColor : '#f0f8e2'
    },
    {
      name : 'Diversos',
      primaryColor : '#e06b69',
      secondaryColor : '#fde7e8'
    }
  ]

  const areaList = areas.map(area => area.name);

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
      <Formulario areas={areaList} onProfSubmition={prof => addProfessor(prof)} />
      
      {areas.map(area => <Area 
                          key={area.name} 
                          name={area.name}
                          primaryColor={area.primaryColor}
                          secondaryColor={area.secondaryColor}
                          professors={professors.filter(prof => prof.area === area.name)} />)}
    </div>
  );
}

export default App;
