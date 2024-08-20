// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 25,
    endereco: {
        logradouro: "Avenida 13 de Abril",
        numero: 245
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n, i);

const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);