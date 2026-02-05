let arrayNumber: number[] = [1, 2, 3];
let arrayString: string[] = ['1', '2', '3'];

// Ó bien de la siguiente manera
/* let arrayNumber: Array<number> = [1, 2, 3];
let arrayString: Array<string> = ['1', '2', '3']; */

// De igual manera se pueden combinar los tipos de dato por ejemplo un string y un number .
let arrayMixed: any[] = [2, '5', 3];
/*
Cuando se conoce el orden de los elementos en el arreglo es posible combinarlos también pero
necesitas que el arreglo solo acepte su tipo de dato en el orden que están, se le llama tuple.
*/
// Declaramos el tuple
let array: [string, number];

// Inicializamos Correctamente
array = ['Hola', 2];

// Inicializamos Incorrectamente
/* array = [2, 'hola']; */ // Regresará un error