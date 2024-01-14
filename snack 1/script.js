let numeri = [];
let somma = 0;

while (somma < 50) {
    let input = prompt("Inserisci un numero:");

    let numero = parseFloat(input);

    if (!isNaN(numero) && input !== null) {
        numeri.push(numero);
        somma += numero;
    } else {
        alert("Inserisci un numero valido.");
    }
}

console.log("Array finale:", numeri);

console.log("Somma degli elementi:", somma);
document.getElementById("output").innerHTML = "Somma degli elementi:" + somma
