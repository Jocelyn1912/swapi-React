import React, { Component } from 'react';
import Logo from './../Logo/Logo.js';
//import './Encabezado.css';

class Encabezado extends Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" align="center">
        <Logo/>
      </div>
    );
  }
}

export default Encabezado;