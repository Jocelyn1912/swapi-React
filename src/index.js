import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Encabezado from './componentes/Encabezado/Encabezado.js'
import Personajes from './componentes/Personajes/Personajes.js';
import Ficha from './componentes/Ficha/Ficha.js';


const contenedorEncabezado = document.getElementById('head');
const contenedor = document.getElementById('contenedor');
const footer = document.getElementById('footer');

render(<Encabezado/>, contenedorEncabezado);
render(<Personajes/>, contenedor);
render(<Ficha/>, footer);


