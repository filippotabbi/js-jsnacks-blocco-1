  var numero = prompt('Dammi un numero a 4 cifre')
  somma = 0
  if( numero.length == "4"){
    console.log("Cifre numero inserito: " + numero.length);
  for (var i = 0; i < numero.length; i++) {
    somma = somma + parseInt(numero.charAt(i));
  }
  console.log("Somma cifre del numero: " + somma);

  }
  else {
    alert("Leggi bene la richiesta!")
  }
