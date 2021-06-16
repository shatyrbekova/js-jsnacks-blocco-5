// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area e stampare il risultato con console.log

var triangoloRettangolo ={
    base:  9 ,
    altezza: 9
}

var ipotenusa = Math.sqrt(Math.pow(triangoloRettangolo.base,2)+Math.pow(triangoloRettangolo.altezza,2));

console.log(ipotenusa)
var perimetro = ipotenusa + triangoloRettangolo.base + triangoloRettangolo.altezza;

console.log(perimetro);

var area = (triangoloRettangolo.base * triangoloRettangolo.altezza)/2;

console.log(area);
