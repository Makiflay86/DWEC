// Roles
/* enum Roles { Admin, User}; // Admin = 0, User = 1
let user: Roles = Roles.Admin; */

/*Por defecto enum inicia el valor de sus propiedades en “0...” , pero se puede modificar, en el
anterior ejemplo Admin sería 0, pero probablemente quiero que sea 1, de igual manera se pueden
modificar todos lo demás.*/
// Roles
/* enum Roles { Admin = 1, User};
let user: Roles = Roles.Admin; // Ahora User será 2

// Modificando todos
enum Roles { Admin = 1, User = 3, Guest = 0 }; */

// Ahora, si el valor del enum pero no sabemos a que corresponde, podemos ir de un valor numérico a un texto.

// Roles
enum Roles { Admin = 1, User, Guest };
let rolAsignado: Roles = Roles.Admin;
console.log("Valor del rol:", rolAsignado);

let user: string = Roles[1];
console.log("Nombre del rol con índice 1:", user);
console.log("Valor de User:", Roles.User);