console.log('ciao');
// creo variabili

var lista_cognomi = document.getElementById('lista_cognomi');

// cognome utente
var cognomeUtente = prompt('Scriva il suo cognome');
console.log(cognomeUtente);
// creo array con cognomi vari
var cognomiVari = ['Busi', 'Doria', 'Orietti', 'Zampelli', 'Raffelli', 'Secchi'];
console.log(cognomiVari);
/*con push aggiungo uno o + elementi alla fine di un arry,quindi:
nome_array.push(variabile/'stringa')
*/
cognomiVari.push(cognomeUtente);
console.log(cognomiVari);
/*sort converte gli elementi in stringhe,quindi, in caso di numeri,saranno
convertiti in stringhe e l' ordine sarà falsato perchè sort ordina controllando
solo la prima cifra/numero; mentre in caso di lettere la maiuscola avrà la precedenza */
cognomiVari.sort();
console.log(cognomiVari);
// creo ciclo for per inserimento lista in HTML
for (var i = 0; i < cognomiVari.length; i++){
  lista_cognomi.innerHTML += '<li>' + cognomiVari[i] + '</li>';
}
// creo una variabile e assegno indexOf a cognomiVari per indicizzare cognomeUtente
var posizioneUtente = cognomiVari.indexOf(cognomeUtente);
console.log(posizioneUtente);
lista_cognomi.innerHTML += '<div>' + 'La sua posizione è la n. ' + (posizioneUtente + 1) + '</div>';
