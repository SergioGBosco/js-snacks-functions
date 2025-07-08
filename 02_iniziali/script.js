/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
// function firstletterword(array) {
//   return array.map(string => string.charAt(0));
// }
// function firstletter(array) {
//creo una funzione freccia
const firstletter = (array) => {

  //creo una variabile per andare ad inserire come da consegna le prime lettere di ogni elemento che fa parte dell'array 

  const firstletterword = [];

  //ciclo l'array in modo tale che ogni elemento dell'array viene assegnato ad una variabile 

  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    //per ogni elemento inserito in questa variabile prendo la prima lettera, utilizzatto il metodo .chatAt, e la inserisco nella vabiabile vuota che ho precedentemente creato 
    firstletterword.push(word.charAt(0))
  }
  return firstletterword
}


// Invoca la funzione qui e stampa il risultato in console
// firstletterword(names);
// console.log(firstletterword(names));
firstletter(names)
console.log(firstletter(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]