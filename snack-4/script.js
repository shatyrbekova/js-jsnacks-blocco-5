// Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
// nome
// cognome
// age
// descrizione
// Per nome, cognome ed age assegnate direttamente nel codice i valori che volete.
// ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.
// {
//   nome: ‘Pippo’,
//   cognome: ‘Baudo’,
//   age: 80,
//   descrizione: ‘’
// } 
// Successivamente, con dei prompt chiediamo di volta in volta all’utente 
//la descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà.
// Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;)
// Stampiamo con un console.log il risultato di questo array di studenti aggiornato.

//In primis, va creato un array di 3 studenti, con le seguenti proprietà: nome; cognome; age ed infine descrizione;

var studenti = [
    {nome:'Tizio', cognome: 'Bianchi', age:'25', descrizione: ''},
    {nome:'Caio', cognome: 'Verdi', age:'24', descrizione: ''},
    {nome:'Sempronio', cognome: 'Gialli', age:'27', descrizione: ''}
]
for(var k=0; k <studenti.length; k++){

    studenti[0].descrizione= prompt('Inserisci la tua opinione su Tizio' );
    studenti[1].descrizione= prompt('Inserisci la tua opinione su Caio' );
    studenti[2].descrizione= prompt('Inserisci la tua opinione su Sempronio' );
    
};
// studenti.push({
//     descrizione: userAnswer
// })
console.log(studenti);