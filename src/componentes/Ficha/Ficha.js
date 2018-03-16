// Importando React
import React, { Component } from 'react';

/* guardando id que identifica a cada usuario*/
const id = 1;

/* Construyendo url con id para mostrar información */
const api_url = `https://swapi.co/api/people/${id}/`;

/* Creando componente*/
class Ficha extends Component {
  constructor(props) {
    super(props);
    this.state = { // En este estado agregaremos los datos de la api
      personas: [],
    }
    this.fetchData = this.fetchData.bind(this); // Enlazando la función fetchData a ese estado
  }

  fetchData(){ // Función que llama a la api
    fetch(api_url)
    .then(data => (data.json()))
    .then(results => {
      const api_data = results;
      this.setState({personas: api_data})
    })
  }

  componentDidMount() { // Cliclo de vida que llama a la función
    this.fetchData();
  }

  render() { // Renderizado del componente
    const {personas} = this.state; // Trae los datos del personaje de la data para poder mostrarlos en la web
    return(
      <div>
        <h2>{personas.name}</h2>
        <h4>Born in {personas.birth_year}</h4>
        <p>Gender: {personas.gender}</p>
        <p>Height: {personas.height}</p>
        <p>Eyes color: {personas.eye_color}</p>
        <p>Hair color: {personas.hair_color}</p>
        <p>Skin color: {personas.skin_color}</p>
     </div>
    )
  }
}

// Exportando componente
export default Ficha;