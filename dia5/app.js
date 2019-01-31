/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// Function expressions and arrows //

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

// Objects

// function isEmpty(objeto) {
//   for (key in objeto) {
//     return false;
//   }
//   return true;
// }

// let schedule = {};

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

//////////////////////////////////////////

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// function suma(objeto) {
//   let suma = 0;
//   for (key in objeto) suma += objeto[key];
//   return suma;
// }

// alert(suma(salaries));

////////////////////////////////////////////

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// function multiplyNumeric(objeto) {
//   let multi = 0;
//   for (key in objeto) {
//     if (typeof objeto[key] == "number") objeto[key] = objeto[key] * 2;
//   }
//   showObject(objeto);
// }

// function showObject(objeto) {
//   for (key in objeto) {
//     alert(key + " = " + objeto[key]);
//   }
// }

//////////////////////////////////////////////

// let persona = {
//   name: "alb",
//   apellido: "salgado",
//   height: 600,
//   title: "My menu"
// };

// function changeCapital(objeto) {
//   if (objeto.name.length <= 3) {
//     let nombre = objeto.name;
//     let letra = nombre[0].toUpperCase();
//     objeto.name = letra + nombre.slice(1);
//     alert(objeto.name);
//   }
// }

// changeCapital(persona);
