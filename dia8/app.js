/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// function ucFirst(cadena) {
//   return cadena[0].touppercase() + cadena.slice(1);
// }

// alert(ucFirst("john"));

//////////////////////////////////////////////

// alert(checkSpam("buy ViAgRA now"));

// function checkSpam(cadena) {
//   let lowerString = cadena.toLowerCase();
//   return lowerString.includes("viagra") || lowerString.includes("xxx");
// }

/////////////////////////////////////////////////

// truncate("What I'd like to tell on this topic is:", 10) = "What I'd like to te…" ;

// function truncate(cadena, longitud){
//     if (cadena.length > longitud - 1){
//         nuevacadena = cadena.slice(0,longitud - 1);
//         alert (cadena = nuevacadena + "…");
//     }
// }

///////////////////////////////////////////////////

// alert(extractCurrencyValue("$120dsf213")); // true

// function extractCurrencyValue(valor) {
//   let nuevovalor = "";
//   for (let char of valor) {
//     for (i = 0; i < 10; i++) {
//       if (char == i) nuevovalor = nuevovalor + char;
//     }
//   }
//   return nuevovalor;
// }

/////////////////////////////////////////////////////

// ARRAYS

// let styles = ["Jazz", "Blues"];
// alert(styles);
// styles.push("Rock-n-Roll");
// alert(styles);
// styles[Math.trunc(styles.length / 2)] = "Classic";
// alert(styles);
// styles.shift();
// alert(styles);
// styles.unshift("Rap and Reggae");
// alert(styles);

////////////////////////////////////////////////

// function sumInput() {
//   let i = 0;
//   let array = [];
//   let valor;
//   do {
//     valor = +prompt("Introduce un valor");
//     array[i] = valor;
//     i++;
//   } while (typeof valor == "number" && valor != 0);
//   delete array[i - 1];
//   return array;
// }

// alert(sumInput());

/////////////////////////////////////////////
