function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(2));
console.log(soma(3, 2.4, 7, 4.1));
console.log(soma(4, 5.6, ' Teste'));
console.log(soma(' A', 'B', 'C'));