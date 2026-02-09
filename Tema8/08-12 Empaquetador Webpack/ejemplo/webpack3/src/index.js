import './style.css';
import { sum } from './math';

const result = sum(5, 7);

console.log('Resultado en consola:', result);

document.getElementById('result').textContent = `5 + 7 = ${result}`;
