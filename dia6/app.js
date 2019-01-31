/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// let calculator = {
//   read() {
//     let i = 0;
//     do {
//       i++;
//       this["a" + i] = +prompt("Introduce un operando");
//       console.log("prompt", this["a" + i]);
//     } while (this["a" + i] != 0);
//     delete this["a" + i];
//   },

//   sum() {
//     let suma = 0;
//     for (let key in this) {
//       if (typeof this[key] == "number") {
//         suma += this[key];
//       }
//     }
//     return suma;
//   },

//   mul() {
//     let multip = 1;
//     for (let key in this) {
//       if (typeof this[key] == "number") {
//         multip *= this[key];
//       }
//     }
//     return multip;
//   }
// };

// calculator.read();
// alert("La suma es: " + calculator.sum());
// alert("La multiplicación es: " + calculator.mul());

//////////////////////////////////////////////////////////

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//     return this;
//   }
// };

// ladder.up().up().down().showStep();

//Crear un objeto con new que le pases una funciónm que saluda y un palametro con el nombre a quien saluda
//Para poder saludar el nombre tiene que tener una a

// function checkName(nombre) {
//   for (let i = 0; i < nombre.length; i++)
//     if (nombre.charAt(i) == "a" || nombre.charAt(i) == "A") return true;
//   return false;
// }

// function saludo(nombre) {
//   if (checkName(nombre)) alert("Hola " + nombre);
// }

// function User(funcion, name = "guest") {
//   this.name = name;
//   this.saludar = funcion;
// }

// let alberto = new User(saludo, "Alberto");
// alberto.saludar("marcos");

//////////////////////////////////////////////////////////////////////////

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt("How much to add?", 0);
//   };
// }

// let accumulator = new Accumulator(1); // initial value 1
// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value
// alert(accumulator.value); // shows the sum of these values

//////////////////////////////////////////////////////////////////////////

// class Clock {
//   constructor(template) {
//     this._template = template.template;
//   }

//   _render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this._template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this._timer);
//   }

//   start() {
//     this._render();
//     this._timer = setInterval(() => this._render(), 1000);
//   }
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();
