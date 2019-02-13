/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// loadScript("/one.js")
//   .then(function(script) {
//     return loadScript("/two.js");
//   })
//   .then(function(script) {
//     return loadScript("/three.js");
//   })
//   .then(function(script) {
//     // use functions declared in scripts
//     // to show that they indeed loaded
//     one();
//     two();
//     three();
//   });

// function loadScript(src) {
//   return new Promise(function(resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error("Script load error: " + src));

//     document.head.append(script);
//   });
// }

/*
 * Crear una función que le pasemos un num

 * que contenga una promesa que si el numero es mayor que 10 
 * se resuelva y si no no
 * 
 * Llamar a la funcion y coger los datos o controlar
 * los errores
 */

// function checkNumber(num) {
//   return new Promise(function(resolve, reject) {
//     if (num > 10) resolve(num);
//     else reject(new Error("El numero es inferior a 10"));
//   });
// }

// checkNumber(5)
//   .then(result => alert(result))
//   .catch(error => alert(error));

/* Escribir dos funciones que usen promesas que puedas encadenar. La primera función pasarAMayus() que tomará un array de palabras y las pondrá en mayúsculas y la segunda función ordenarPalabras() que las ordenará alfabéticamente.

Si el array contiene datos que no son strings debería lanzar un error.*/

// let array = ["ad", "sdd", "sdfwe"];
// let may = [];
// let string = "asdadasdasd";

// pasarAMay(array)
//   .then(result => {
//     result;
//     showArray(may);
//   })
//   .catch(error => alert(error));

// function pasarAMay(array) {
//   return new Promise(function(resolve, reject) {
//     for (string of array) {
//       if (typeof string == "string") {
//         resolve(may.push(string.toUpperCase()));
//       } else reject(new Error("El array contiene datos erroneos"));
//     }
//   });
// }

// function ordenarPalabras(array) {
//   array.sort;
// }

// function showArray(may) {
//   for (string of may) {
//     console.log(string);
//   }
// }

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// function loadJson(url) {
//   return fetch(url).then(response => console.log(response));
// }

// loadJson("https://api.github.com/users/salgadoasr").catch(alert);
