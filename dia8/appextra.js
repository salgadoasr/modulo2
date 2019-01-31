/**
 * Crear una clase que cree personas.
 * Una persona va estar casada con otra persona.
 *
 * Esa clase tiene que tener funcionalidad para checkear si 2 personas estan
 * casadas aunque hayan mayusculas o minusculas en el nombre de las personas.
 *
 */

/**
 * Crear una funcion que al pasarle un objeto te de toda la informacion sobre el.
 *
 * Cuantas propiedades tiene, que valen sus propiedades, si el valor de una propiedad es un
 * string que me diga la longitud del string, si tiene un objeto dentro que entre dentro de el objeto
 * y lo analice tambien y asi sucesivamente. (Pista: RECURSIVIDAD)
 */

// class Persona {
//   constructor(name, pareja, fecha) {
//     this.name = name;
//     this.pareja = pareja;
//     this.objeto = fecha;
//   }

//   showProperties() {
//     let objeto = this;
//     let objetoAnidado;
//     do {
//       objetoAnidado = false;
//       for (let prop in objeto) {
//         if (prop == "objeto") {
//           objeto = prop;
//           objetoAnidado = true;
//         } else {
//           console.log(
//             prop +
//               " contiene " +
//               this[prop] +
//               " con una logitud de  " +
//               this[prop].length
//           );
//         }
//       }
//     } while (objetoAnidado == true);
//   }

//   static checkMarried(persona1, persona2) {
//     let persona1Lower = persona1.name.toLowerCase();
//     let persona2Lower = persona2.pareja.toLowerCase();
//     if (persona1Lower == persona2Lower) return true;
//     else return false;
//   }
// }

// let persona1 = new Persona("alberto", "raquel", new Date());
// let persona2 = new Persona("raquel", "Alberto", new Date());

// if (Persona.checkMarried(persona1, persona2))
//   console.log(persona2.name + " es marido/mujer de " + persona1.name);
// persona1.showProperties();
