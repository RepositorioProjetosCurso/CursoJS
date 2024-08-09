// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(5);

// Função com retorno
function soma(a, b = 0) {
    return a + b;
}

let valorSomado = soma(2, 3);
console.log(valorSomado);