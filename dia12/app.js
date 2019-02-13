/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// function unique(arr) {
//   let repetidos = new Set();
//   for (item of arr) repetidos.add(item);
//   return repetidos;
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O"
// ];

// for (let user of unique(values)) console.log(user); // Hare, Krishna,

////////////////////////////////////////////////////////////////////
// Otra manera de  hacerlo

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O"
// ];

// alert(unique(values)); // Hare, Krishna, :-O

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

// function aclean(arr) {
//     let obj = {};

//     for (let i = 0; i < arr.length; i++) {
//       let sorted = arr[i].toLowerCase().split("").sort().join("");
//       obj[sorted] = arr[i];
//     }

//     return Object.values(obj);
// }

//////////////////////////////////////////////////////////
// Segunda forma de hacerlo

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

// function aclean(arr) {
//   let noRepetido = new Map();
//   for (item of arr) {
//     let ordenado = item
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("");
//     noRepetidos.set(ordenado, item);
//   }
//   return Array.from(noRepetidos.values());
// }

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");

// alert(keys); // name, more

/////////////////////////////////////////////////////////

// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];

// let readMessages = new WeakSet();

// // two messages have been read
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// // readMessages has 2 elements

// // ...let's read the first message again!
// readMessages.add(messages[0]);
// // readMessages still has 2 unique elements

// // answer: was the message[0] read?
// alert("Read message 0: " + readMessages.has(messages[0])); // true

// messages.shift();
// // now readMessages has 1 element (technically memory may be cleaned later)

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// Object.keys, values, entries

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };

// alert(sumSalaries(salaries)); // 650

// function sumSalaries(salaries) {
//   let suma = 0;
//   for (let value of Object.values(salaries)) {
//     suma += value;
//   }
//   return suma;
// }

//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// let user = {
//   name: "John",
//   age: 30
// };

// alert(count(user)); // 2

// function count(user) {
//   return Object.keys(user).length;
// }

////////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// let user = { name: "John", age: 30, isAdmin: false };

// // your code to the left side:
// // ... = user
// let { name, age, isAdmin } = user;

// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };

// console.log(`El que más cobra es ${topSalary(salaries)}`);

// function topSalary(salarios) {
//   let maxValue = null;
//   let maxName;
//   for (let [name, value] of Object.entries(salarios))
//     if (maxValue < value) {
//       maxValue = value;
//       maxName = name;
//     }
//   return maxName;
// }

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// Date and time

// let date = new Date(2012, 1, 20, 3, 12);
// alert(date);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// let date = new Date(2012, 0, 3); // 3 Jan 2012
// alert(getWeekDay(date));

// function getWeekDay(fecha) {
//   let diasSemana = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
//   return diasSemana[fecha.getDay()];
// }

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// function getLocalDay(date) {
//   let day = date.getDay();
//   if (day == 0) {
//     day = 7;
//   }
//   return day;
// }

// alert(getLocalDay(new Date(2012, 0, 3)));

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// let date = new Date(2015, 0, 2);

// alert(getDateAgo(date, 1) + ", " + date.getFullYear());
// alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)

// function getDateAgo(date, num) {
//   return date.getDate(date.setDate(date.getDate() - num));
// }

//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
