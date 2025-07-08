/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

//creo una variabile per permettere all'utente di inserire una lettera 

const startletter = prompt(`Inserisci una lettera`)

// Dichiara la funzione qui.

//utilizzo la funzione freccia 
// function firstletter(array, x) {
const firstletter = (array, x) => {

  //creo una variabile attualemente vuota per permettere al programma di andare ad inserire all'interno i nomi di persona che iniziano con la lettera indicata dall'utente 

  const letterofname = [];

  //creo un ciclo for per andare a ciclare ogni singolo elemento e confrontare la sua inziale con quella scelta dall'utente

  for (let i = 0; i < array.length; i++) {
    let checkname = array[i];

    //stabilisco la condizione da rispettare, ovvero se la prima lettera del nome da controllare è uguale a quella scelta dall'utente pusho l'elemento controllato in una variabile creata precedentemente.

    if (checkname.charAt(0) === startletter) {
      letterofname.push(checkname)
    }
  }

  //Metto return al di fuori del ciclo for perchè altrimenti si ferma al primo valore positivo trovato 

  return letterofname
}

// Invoca la funzione qui e stampa il risultato in console
firstletter(names, startletter)
console.log(firstletter(names, startletter))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]