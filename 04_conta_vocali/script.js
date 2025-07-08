/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
//creo una funzione che mi permette di elencare le vocali all'interno dell'elemento 
function vocaliword(string) {

  //Creo una variabile vuota dove all'interno andrò ad inserire solo le vocali trovate nell'elemento in questione e un altra variabile per confrontare le vocali 

  const vocali = [];
  const vocalicheck = [`a`, `e`, `i`, `o`, `u`, `A`, `E`, `I`, `O`, `U`];
  //ciclo gli elementi ottenuti dopo la scomposizione, se questi sono vocali le inserisco nella variabile "vocali" creata in precedenza

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    //aggiungo la condizione utilizzando l'istruzione includes, che mi permette di confrontare ogni singola lettera con quelle all'interno della variabile creata apposta per il confronto. 

    if (vocalicheck.includes(letter)) {
      vocali.push(letter);
    }
  }
  return vocali.length + vocali
}

// Invoca la funzione qui e stampa il risultato in console
vocaliword(word)
console.log(vocaliword(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i).