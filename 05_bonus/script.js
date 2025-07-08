/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

//creo una variabile che contiene un saluto
function hello(string) {
  let message = `Buon giorno ${string}`;

  //creo una variabile per stabilire l'ora
  const ora = new Date();
  const ore = ora.getHours();

  if (ore >= 13 && ore < 17) {
    message = `Buon Pomeriggio ${string}`;
  }

  else if (ore >= 17 && ore < 24) {
    message = `Buona sera ${string}`;
  }

  return message
}




// Invoca la funzione qui e stampa il risultato in console
hello(name);
console.log(hello(name))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.