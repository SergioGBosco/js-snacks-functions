/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstletterword(array) {
  return array.map(string => string.charAt(0));
}


// Invoca la funzione qui e stampa il risultato in console
firstletterword(names);
console.log(firstletterword(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]