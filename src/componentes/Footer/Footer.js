// Importando React
import React, { Component } from 'react';
// Importando css
import './Footer.css';

/* Renderizado para mostrar los datos en la web */
class Footer extends Component {
  render() {
    return(
      <div className="Footer">
        <p>Swapi-React @ Copyright</p>
      </div>
    )
  }
}

// Exportando componente
export default Footer;