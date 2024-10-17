function fazerBolo(callback) {
    console.log("Fazendo o bolo... Isso vai levar um tempinho.");
    setTimeout(callback, 3000); // Espera 3 segundos (3000 milissegundos) e depois chama o callback
}

function comerBolo() {
    console.log("O bolo está pronto! Vamos comer!");
}

fazerBolo(comerBolo); // Primeiro fazemos o bolo, depois comemos
