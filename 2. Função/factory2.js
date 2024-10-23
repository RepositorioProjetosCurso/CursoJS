function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("iPhone 13", 3500.50));
console.log(criarProduto('iPad', 1998.90))