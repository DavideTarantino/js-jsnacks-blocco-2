let numerocasuale = Math.floor((Math.random() * 100) + 1);

do{
    let numeroinserito = prompt("inserisci un numero:");

    let valoreinserito = parseFloat(numeroinserito);

    if(valoreinserito > numerocasuale){
        document.getElementById("soluzione").innerHTML = "Il numero corretto è:" + numerocasuale 
        document.getElementById("risposta").innerHTML = "Il numero da te inserito è troppo alto :("
    }else if(valoreinserito < numerocasuale){
        document.getElementById("soluzione").innerHTML = "Il numero corretto è:  " + numerocasuale
        document.getElementById("risposta").innerHTML = "Il numero da te inserito è troppo basso :("
    }else{
        document.getElementById("risposta").innerHTML = "HAI VINTO !!!"
    }
}while(numeroinserito == numerocasuale)
    
