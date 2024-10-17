function pegarPao(callback) {
    console.log("Pegando o pão...");
    setTimeout(function() {
        console.log("Pão está pronto!");
        callback();
    }, 1000); // Espera 1 segundo para pegar o pão
}

function passarManteiga(callback) {
    console.log("Passando manteiga...");
    setTimeout(function() {
        console.log("Manteiga foi passada!");
        callback();
    }, 1500); // Espera 1.5 segundos para passar a manteiga
}

function colocarQueijo(callback) {
    console.log("Colocando o queijo...");
    setTimeout(function() {
        console.log("Queijo foi colocado!");
        callback();
    }, 1000); // Espera 1 segundo para colocar o queijo
}

function fecharSanduiche() {
    console.log("Fechando o sanduíche... Sanduíche pronto!");
}

// Agora vamos fazer todas essas etapas na ordem certa:
pegarPao(function() {
    passarManteiga(function() {
        colocarQueijo(function() {
            fecharSanduiche();
        });
    });
});