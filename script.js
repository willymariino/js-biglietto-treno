// chiedere all'utente le informazioni necessarie
const km = parseInt(prompt("quanti chilometri vuoi percorrere?"));
const age = parseInt(prompt("quanti anni hai?"));

// calcolare il prezzo del biglietto
const price = km * 0.21;
let discount = 0;

//applicare sconti in base all'età
if (age < 18) {
    discount = price * 0.2;
} else if (age > 65) {
    discount = price * 0.4;
}

// calcolare il prezzo finale

const FinalPrice = price - discount;
console.log(FinalPrice.toFixed(2));