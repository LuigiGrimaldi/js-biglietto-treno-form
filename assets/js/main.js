// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

//chiedo all'utente quanti km vuole percorrere e console.log
const howmanyKm = prompt('Quanti km si vogliono percorrere?');
console.log(howmanyKm);

//chiedo all'utente l'età e console.log
const userAge = prompt('età?');
console.log(userAge);

//Costo per km
let priceKm = 0.21
let priceKm_under = 0.17
let priceKm_over = 0.13

if (userAge <= 18) {
    let tot = priceKm_under * howmanyKm;
    console.log(tot);
    document.getElementById('by').innerHTML = 'Il costo del biglietto è: ' + Math.round(Number(tot)) + ' €';
} else if (userAge >= 65) {
    let tot = priceKm_over * howmanyKm;
    console.log(tot);
    document.getElementById('by').innerHTML = 'Il costo del biglietto è: ' + Math.round(Number(tot)) + ' €';
} else {
    let tot = priceKm * howmanyKm;
    console.log(tot);
    document.getElementById('by').innerHTML = 'Il costo del biglietto è: ' + tot + ' €';
}
