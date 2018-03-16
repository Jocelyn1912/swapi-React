import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Encabezado from './componentes/Encabezado/Encabezado.js'
import Personajes from './componentes/Personajes/Personajes.js';
import Modal from './componentes/modal/Modal.js';
import Ficha from './componentes/Ficha/Ficha.js';


const contenedorEncabezado = document.getElementById('head');
const contenedor = document.getElementById('contenedor');
const contenedorModal = document.getElementById('modal');

render(<Encabezado/>, contenedorEncabezado);
render(<Personajes/>, contenedor);
render(<Modal/>, contenedorModal);
const footer = document.getElementById('footer');

render(<Encabezado/>, contenedorEncabezado);
render(<Personajes/>, contenedor);


