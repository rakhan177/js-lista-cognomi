console.log('ciao');
// creo variabili
var benvenuto = document.getElementById('benvenuto');
var lista_cognomi = document.getElementById('lista_cognomi');

// cognome utente
var cognomeUtente = prompt('Scriva il suo cognome');
console.log(cognomeUtente);
// creo array con cognomi vari
var cognomiVari = ['Busi', 'Doria', 'Orietti', 'Zampelli', 'Raffelli', 'Secchi'];
console.log(cognomiVari);
/*con push aggiungo uno o + elementi alla fine di un arry,quindi:
nome_array.push(variabile/'stringa')*/
cognomiVari.push(cognomeUtente);
console.log(cognomiVari);
