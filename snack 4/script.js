let numeroInserito = prompt("Inserisci un numero:");
let numero = parseInt(numeroInserito);

if (!isNaN(numero)) {
    for (let i = 0; i < 1; i++) {
        if (numero % 2 === 0) {
            document.getElementById("output").innerHTML = "Il numero è pari:"+ numero
        } else {
            document.getElementById("output").innerHTML = ("Il numero è dispari, stampo il successivo: ")+(numero + 1);
        }
    }
} else {
    document.getElementById("output").innerHTML = "Inserisci un numero valido."
}
