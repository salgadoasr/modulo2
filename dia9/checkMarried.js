function checkMarried(persona1, persona2) {
  let persona1Lower = persona1.pareja.toLowerCase();
  let persona2Lower = persona2.pareja.toLowerCase();
  if (persona1Lower == persona2Lower) return true;
  else return false;
}
