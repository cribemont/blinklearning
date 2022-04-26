// Declaracion de la func.
const sumaArray = (array) => {
// Check que tenemos un Array
  if (Array.isArray(array)) {
    // flat() para reconstruir un array con todos los valores
    return array.flat().reduce((a, b) => {
    // function reduce para sumar cada variable del array
      return a + b;
    });
  }
};
var lista1 = [1, 4, 3, 0];
var lista2 = [1, 2, [5, 8], 4];
var lista3 = [0, [6, 2], null, 7, 1];

console.log(sumaArray(lista1)); // 8
console.log(sumaArray(lista2)); // 20
console.log(sumaArray(lista3)); // 16

// se podria añadir un parametro para incluir mas recursividad en flat() y asi tener mas niveles de array multi dimensional

const sumaArrayMasRecursive = (array, niveles = 0) => {
  // Check que tenemos un Array
  if (Array.isArray(array)) {
    // flat() para reconstruir un array con todos los valores
    return array.flat(niveles).reduce((a, b) => {
      // function reduce para sumar cada variable del array
      return a + b;
    });
  }
};
var lista1Rec = [1, 4, 3, 0];
var lista2Rec = [1, 2, [5, 8], 4];
var lista3Rec = [0, [6, 2, [5, 6, 3]], null, 7, 1];

console.log(sumaArrayMasRecursive(lista1Rec)); // 8
console.log(sumaArrayMasRecursive(lista2Rec, 1)); // 20
console.log(sumaArrayMasRecursive(lista3Rec, 2)); // 30