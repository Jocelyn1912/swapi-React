import React, {Component} from 'react';
import img from './../../img/luke.jpg';
import './Personajes.css';

class Personajes extends Component {
  render() {
    return (
     <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <button className="personaje" value={1} type="button"><img src={img} className="img-responsive"/></button>
     </div>
    )
  }
}

export default Personajes;