const soma = function(x , y) {
    return x + y;
}

const imprimirResultado = function(x , y, operacao = soma) {
    console.log(operacao(x, y));
}

imprimirResultado(4, 3);
imprimirResultado(5, 8, soma);
imprimirResultado(10, 6, function(x, y) {
    return x - y;
});
imprimirResultado(7, 2, (x, y) => x * y);

const pessoa = {
    falar: function () {
        console.log("Olá");
    }
}

pessoa.falar();