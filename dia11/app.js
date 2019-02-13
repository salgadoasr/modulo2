/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// ARRAYS METHODS

// console.log(camelize("background-color"));

// function camelize(cadena) {
//   let array = cadena.split("-");
//   let arrayUpper = array.map((palabra, index) =>
//     index == 0 ? palabra : palabra[0].toUpperCase() + palabra.slice(1)
//   );
//   cadena = arrayUpper.join("");
//   return cadena;
// }

/////////////////////////////////////////////////

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert(filtered); // 3,1 (matching values)

// alert(arr); // 5,3,8,1 (not modified)

// function filterRange(array, valorIni, valorFin) {
//   return array.filter((item, index) => item >= valorIni && item <= valorFin);
// }

////////////////////////////////////////////////

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert(arr); // [3, 1]

// function filterRangeInPlace(array, a, b) {
//   for (i = 0; i <= array.length; i++)
//     if (a <= arr[i] && b >= arr[i]) array.splice(i, 1);
// }

//////////////////////////////////////////////////

// let arr = [5, 2, 1, -10, 8];

// arr.sort(compareNumeric);

// function compareNumeric(a, b) {
//   if (a < b) return 1;
//   if (a == b) return 0;
//   if (a > b) return -1;
// }
// // ... your code to sort it in the reverse order

// alert(arr); // 8, 5, 2, 1, -10
