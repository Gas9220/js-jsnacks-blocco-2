// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

'use strict';

// Quante volte voglio chiedere all'utente di inserire un numero
const numbers = 5;

// Variabile dove conservo il risultato
let result = 0;

for (let index = 0; index < numbers; index++) {
    // Chiedo all'utente di inserire il numero
    const input = Number(prompt('Inserisci un numero'));
    // Ad ogni iterazione vado a sommare il nuovo input con il valore precedente di result
    result += input;
}

// Stampo il risultato in console
console.log(`Versione for: Il risultato è ${result}`);

// Azzero result
result = 0

while (result < numbers) {
    // Chiedo all'utente di inserire il numero
    const input = Number(prompt('Inserisci un numero'));
    // Ad ogni iterazione vado a sommare il nuovo input con il valore precedente di result
    result += input;
}

// Stampo il risultato in console
console.log(`Versione while: Il risultato è ${result}`);