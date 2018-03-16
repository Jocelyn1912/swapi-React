import React, {Component} from 'react';
import './Personajes.css';
import img from './../../img/luke.jpg';


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