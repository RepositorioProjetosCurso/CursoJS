// par nome/valor
const saudacao = 'olá'; //Contexto lexico 1

function exec() {
    const saudacao = 'e ai!'; //Contexto lexico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Roberto Claudio Três Peito",
    idade: 33,
    peso: 95,
    endereco: {
        logradouro: "Rua Cuca Beluco",
        numero: 244,
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);