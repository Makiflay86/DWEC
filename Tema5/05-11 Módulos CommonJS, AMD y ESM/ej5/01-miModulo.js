// Exportar variables y funciones
export const foo = 'constante  foo desde01-Mimodulo';
export function myFunction() {
    return prompt('function  myFunction desde01-Mimodulo');
}

export function arrayDatos() 
{
    return [1,2,3,4,5,2,1,23,4,5,1,2,3,99,67,68,69];
}

export function numRandom() 
{
    return Math.round(Math.random()*99);
}

export function numaleatorio() 
{
    return Math.round(Math.random()*10);
}

export function operacionaleatoria() 
{
    let a = numaleatorio();
    let b = numaleatorio();
    return a + b;
}