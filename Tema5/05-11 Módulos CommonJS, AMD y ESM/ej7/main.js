import {    create,    createReportList} from './modules/canvas.js';
import {    name,    draw,    reportArea,    reportPerimeter} from './modules/square.js';
import randomSquare from './modules/square.js';
let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);
let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
// Use the default
let square2 = randomSquare(myCanvas.ctx);




const picker = document.getElementById('picker');
const btn = document.getElementById('btn');
const contenedor = document.getElementById('contenedor');

btn.addEventListener('click', () => {
    const cuadrado = document.createElement('div');
    const colorSeleccionado = picker.value;

    cuadrado.style.width = '50px';
    cuadrado.style.height = '50px';
    cuadrado.style.backgroundColor = colorSeleccionado;
    cuadrado.style.display = 'inline-block';
    cuadrado.style.margin = '5px';
    cuadrado.style.border = '1px solid #000';

    contenedor.appendChild(cuadrado);
});