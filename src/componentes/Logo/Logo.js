import React, { Component } from 'react';
import logo from './../../img/logo-actual-star-wars.jpg';
import './Logo.css';

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

export default Logo;