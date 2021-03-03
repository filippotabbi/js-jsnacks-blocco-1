 var parola = prompt("inserisci il primo vocabolo").trim();
 var parola2 = prompt("inserisci il secondo vocabolo").trim();

 if (parola.length < parola2.length)
 {
    console.log(parola + " il vocabolo meno lungo è il primo");
    console.log(parola2 + " il vocabolo più lungo è il secondo");
 }
 else if(parola.length == parola2.length) {
    console.log("entrambi i vocaboli hanno la stessa lunghezza");
 }
 else{
    console.log(parola2 + " il vocabolo meno lungo è il secondo");
    console.log(parola + " il vocabolo più lungo è il primo");
 }
