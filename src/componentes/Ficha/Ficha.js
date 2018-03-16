import React, { Component } from 'react';

const id = 2;

const api_url = `https://swapi.co/api/people/${id}/`;

class Ficha extends Component {

   constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    fetch(api_url)
    .then(data => (data.json()))
    .then(api_data => {
      console.log(api_data);
    })
  }


  render() {
    return(
      <div>Hola</div>
    )
  }

}

export default Ficha;