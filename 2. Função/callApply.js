function getPreco(imposto= 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto1 = {
    nome: "Notebook",
    preco: 4592,
    desc: 0.15,
    getPreco
}

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
console.log(produto1.getPreco());

const carro = { preco: 50000, desc: 0.20,}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, 'US$'));
console.log(getPreco.apply(global, [0.17, 'US$']));