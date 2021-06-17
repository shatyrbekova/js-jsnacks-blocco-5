// Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
// nome
// cognome
// age
// descrizione 
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

//Dare una descrizione, usando direttamente la numerazione della posizione degli studenti nell'array in esame;
 
    // studenti[0].descrizione= prompt('Inserisca la Sua opinione su Tizio' );
    // studenti[1].descrizione= prompt('Inserisca la Sua opinione su Caio' );
    // studenti[2].descrizione= prompt('Inserisca la Sua opinione su Sempronio' );
    

console.log(studenti);
 
 
// Per semplificare il nostro lavoro diamo un nome breve all'ID con una variabile;

 var table=document.getElementById('table');

 // In alternativa, potrei usare la seguente formula(for) per chiedere all'utente la sua opinione su ogni studente;

 table.innerHTML='<tbody><tr>';
for (var k=0; k<studenti.length; k++){
    studenti[k].descrizione=prompt('Inserisca la Sua opinione su '+ studenti[k].nome)

    //Per visualizzare nell’html questi dati in una forma tabellare;
    for (var key in studenti[k]){
        document.getElementById('table').innerHTML +='<td></td>' + key+':'+studenti[k][key];
        table.innerHTML+='</tr></tbody>';
    }
    
};










