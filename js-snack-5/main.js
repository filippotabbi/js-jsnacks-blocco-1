var vuoto = [""]

 for (var i = 0; i < 6; ++i){
   var numero = parseInt(prompt("Dammi un numero"));
   if (numero%2==0)
            {
             alert("Il numero è Pari");
            }
           else
            {
              console.log(numero);
             alert("Il numero è Dispari");
             vuoto.push(numero)
            }
   }
