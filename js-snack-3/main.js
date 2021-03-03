
var invitati = ['Giorgio', 'Luca', 'Simone', 'Flavio', 'Michele', 'Belen', 'Selvaggia', 'Taylor'];

var user = prompt("Inserisci il tuo nome");
var contatore = false;
for (var i = 0; i < invitati.length; i++) {
  if (user === invitati[i]) {
    contatore = true;
    break;
  }
}

if (contatore) {
  console.log("Benvenuto alla Festa!");
  alert("Benvenuto!")
} else {
  console.log("Rimbalzato!");
  alert("Rimbalzato!")
}
