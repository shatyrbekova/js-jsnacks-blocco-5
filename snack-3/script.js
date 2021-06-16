// Snack 3 - 1^ parte.
// Creare un array con tre numeri, calcolare la media di questi tre numeri.

var numbers= [3,4,5];
var totale=0;
var media=0;

for (var i=0; i < numbers.length; i++){

  totale += numbers[i];

}
media += totale/numbers.length;

console.log(media);

// Snack 3 - 2^ parte.
// Costruiamo un array di tre giocatori di basket. Ogni giocatore avrà le seguenti proprietà:
// nome
// cognome
// anno
// punteggio

var giocatori=[
    {nome:'Pippo', cognome: 'Bianchi', age: 25, punteggio:3},
    {nome:'Aldo', cognome: 'Rossi', age: 28, punteggio:4},
    {nome:'Valdo', cognome: 'Gialli', age: 29, punteggio:5}

]



var result=0;
var avg=0;

// Calcolare il punteggio medio dei tre giocatori.

for (var x =0; x < giocatori.length; x++){
     result+=giocatori[x].punteggio;
     console.log(result);//12
    
}

avg += result/giocatori.length;
console.log(avg);
