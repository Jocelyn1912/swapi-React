import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Encabezado from './componentes/Encabezado/Encabezado.js'
import Personajes from './componentes/Personajes/Personajes.js';


const contenedorEncabezado = document.getElementById('head');
const contenedor = document.getElementById('contenedor');

render(<Encabezado/>, contenedorEncabezado);
render(<Personajes/>, contenedor);

