// JSSnack3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

'use strict';

// Creo un array di falsi nomi
const names = ['Sara', 'Giovanni', 'Gaspare', 'Angela', 'Michele', 'Francesca'];
// Creo un array di falsi cognomi
const surnames = ['Monte', 'Paolella', 'Corradi', 'Frascolla'];

// Creo l'array che conterrà gli invitati random
const randomPeople = [];

// Creo 3 persone in modo random
for (let i = 0; i < 3; i++) {
    // Ad ogni giro prendo un elemento random da names e surnames
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomSurnames = surnames[Math.floor(Math.random() * surnames.length)];

    // Lo aggiungo all'array degli invitati
    randomPeople.push(randomName + " " + randomSurnames);
}

// Controllo che newsletterSubscribers si sia rimepito
console.log(randomPeople);