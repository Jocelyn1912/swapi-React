import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './../../img/logo-actual-star-wars.jpg';
import './Logo.css';

class Logo extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="img-responsive" />
        <p>Haz click en la imagen para ver detalles del personaje!!</p>
      </div>
    );
  }
}

export default Logo;