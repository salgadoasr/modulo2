/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// let age = prompt("Introduce tu edad");

// if (age >= 14 && age <= 90) alert("La edad es correcta");
// else alert("La edad está fuera de los límites");

// let age = prompt("Introduce tu edad");

// if (!(age >= 14) || !(age <= 90)) alert("La edad es correcta");
// else alert("La edad está dentro de los límites");

// function checkPassword(password) {
//   if (password) {
//     if (password == "TheMaster") {
//       alert("Wellcome");
//     } else alert("Wrong password");
//   } else alert("Canceled");
// }

// function checkUser(user) {
//   if (user) {
//     if (user == "admin") {
//       password = prompt("Introduce el password");
//       checkPassword(password);
//     } else alert("I dont know you");
//   } else alert("Canceled");
// }

// let user = prompt("Introduce tu usuario");
// let password;
// checkUser(user);

// function showMessage(parametro) {
//   if (parametro) alert("Canceled");
//   else alert("Wrong password");
// }

// function checkPassword(password) {
//   if (password == "TheMaster") {
//     alert("Wellcome");
//   } else showMessage(password == "" || password == "null");
// }

// function checkUser(user) {
//   if (user == "admin") {
//     password = prompt("Introduce el password");
//     checkPassword(password);
//   } else if (user == "" || user == "null") {
//     alert("Canceled");
//   } else alert("I dont know you");
// }

// let user = prompt("Introduce tu usuario");
// let password;
// checkUser(user);

// function checkVoid(parametro) {
//   if (parametro == "") return prompt("No dejes el campo el blanco");
//   else {
//     alert("Wrong password");
//     return parametro;
//   }
// }

// function checkPassword(password) {
//   if (password == "TheMaster") {
//     alert("Wellcome");
//   } else {
//     return checkVoid(password);
//   }
// }

// function checkUser(user) {
//   if (user == "admin") {
//     password = prompt("Introduce el password");
//     do {
//       password = checkPassword(password);
//     } while (!password);
//   } else if (user == "" || !user) {
//     alert("Canceled");
//   } else alert("I dont know you");
// }

// let user = prompt("Introduce tu usuario");
// let password;
// checkUser(user);

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
