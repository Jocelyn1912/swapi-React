// Importando React
import React, { Component } from 'react';
// Importando componente a usar
import logo from './../../img/logo-actual-star-wars.jpg';
import './Logo.css';

/* Renderizado para mostrar los datos en la web */
class Logo extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="img-responsive" />
        <p></p>
      </div>
    );
  }
}

// Exportando componente
export default Logo;