// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10

var palla ={
    peso: 10,
}

console.log(palla)

//Attraverso un prompt dare la possibilità 
//all’utente di modificare il peso della palla.

 palla.peso = parseInt(prompt('Modificare il peso'));

  console.log(palla);


  //Inserire  l’oggetto palla in una array var giochi = [];

  var giochi = [
        
    
  ];
  giochi.push(palla);

  //Permettere all’utente di inserire un nuovo oggetto all’interno dell’array giochi


  var games =[

  ];

   var newGame = prompt('Inserisci un nuovo gioco');
   var newPeso=prompt('Inserisci un nuovo peso');
    
  games.push({
    
    name: newGame,
    peso: newPeso

  });
  

console.log(games);





