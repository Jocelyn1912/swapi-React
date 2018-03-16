import React, { Component } from 'react';

const id = 2;

const api_url = `https://swapi.co/api/people/${id}/`;

class Ficha extends Component {

   constructor(props) {
    super(props);
    this.state = {
      personas: [],
    }
    this.fetchData = this.fetchData.bind(this);
  }


  fetchData(){
    fetch(api_url)
    .then(data => (data.json()))
    .then(results => {
      const api_data = results; 
      this.setState({personas: api_data})
    })
  }


  componentDidMount() {
   this.fetchData();
  }


  render() {
    const {personas} = this.state;
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

export default Ficha;