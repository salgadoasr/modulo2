/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// let i = 3;
// while (i) {
//   alert(i--); //1
// }

// let i = 0;
// while (++i < 5) alert(i); //1 2 3 4

// let i = 0;
// while (i++ < 5) alert(i); // 1 2 3 4 5

// for (let i = 0; i < 5; i++) alert(i); // 0 1 2 3 4
// for (let i = 0; i < 5; ++i) alert(i); // 0 1 2 3 4

// for (let i = 1; i < 10; ++i) {
//   if (i % 2 == 0) alert(i);
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }
// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   ++i;
// }

// let number;
// do {
//   number = prompt("Introduce un número mayor de 100");
// } while (number <= 100 && number);

// let num = prompt("Introduce un límite");
// outer: for (let i = 2; i <= num; i++) {
//   for (let x = 2; x < i; x++) if (i % x == 0) continue outer;
//   alert(i);
// }

// let browser = prompt("Introduce un navegador");
// if (browser == "edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser == "chrome" ||
//   browser == "safari" ||
//   browser == "firefox" ||
//   browser == "opera"
// ) {
//   alert("Okay we support these browsers too");
// } else alert("We hope that this page looks ok!");

// let a = +prompt("a?", "1");
// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2,3");
//     break;
// }

// function checkAge(age) {
//   return age >= 18
//     ? true
//     : confirm("Do you have your parents permission to access this page?");
// }

// function checkAge(age) {
//   return (
//     age >= 18 ||
//     confirm("Do you have your parents permission to access this page?")
//   );
// }

// let age = prompt("Introduce tu edad");
// if (checkAge(age)) alert("Puede acceder");
// else alert("No puede acceder");

// function min(a, b) {
//   if (a >= b) return b;
//   else return a;
// }
// let a = prompt("Introduce el primer número");
// let b = prompt("Introduce el segundo número");
// alert("El número más pequeño es: " + min(a, b));

// function pow(x, n) {
//   let result = x;
//   for (let i = 2; i <= n; i++) result = result * x;
//   return result;
// }

// let x = prompt("Introduce la base");
// let n = prompt("Introduce el exponente");
// alert("El resultado es: " + pow(x, n));
