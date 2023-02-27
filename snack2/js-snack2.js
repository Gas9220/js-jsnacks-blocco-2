// JSsnack2
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

'use strict';

const number = 5

if (number % 2 === 0) {
    console.log( `Il numero inserito (${number}) è pari `)
} else {
    console.log(`Il numero inserito (${number}) è dispari, il numero pari successivo è ${number + 1}`)
}