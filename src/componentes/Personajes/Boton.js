import React, {Component} from 'react';
//import Personajes from './Personajes.js';
import datos from './../../personajes.json';

class Boton extends Component {
  render() {
    return(
      <div>
        {
          datos.map(function(item) {
            return
            console.log(item.personajes);
            
          })
        }
      </div>
    )
  }
}

export default Boton;