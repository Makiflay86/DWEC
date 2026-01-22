import {
    foo,
    myFunction,
    arrayDatos,
    numRandom,
    operacionaleatoria
} from './01-miModulo.js';

// Acceder a las propiedades exportadas
document.getElementById("aquivaelfoo").innerHTML += " / " + foo + " / "
document.getElementById("aquivaelfoo").innerHTML += myFunction() + " / ";
document.getElementById("aquivaelfoo").innerHTML += arrayDatos() + " / ";
document.getElementById("aquivaelfoo").innerHTML += numRandom() + " / ";
document.getElementById("aquivaelfoo").innerHTML += operacionaleatoria();
