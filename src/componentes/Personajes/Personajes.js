import React, {Component} from 'react';
import './Personajes.css';
import img from './../../img/luke.jpg';
import img2 from './../../img/c3po.jpg';


class Personajes extends Component {
  render() {
    return (
      <div>

       <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <button className="personaje" value={1} type="button"><img src={img} className="img-responsive"/></button>
       </div>
       <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <button className="personaje" value={2} type="button"><img src={img2} className="img-responsive"/></button>
       </div>
       
     </div>
    )
  }
}

export default Personajes;