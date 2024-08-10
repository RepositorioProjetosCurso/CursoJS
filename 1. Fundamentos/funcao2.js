// Armazenando uma função em uma váriavel
const imprimeSoma = function(a, b) {
    console.log(a + b);
}

imprimeSoma(5, 6);

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}

console.log(soma(5,3));

// Retorno Implicito
const subtrair = (a, b) => a -b;

console.log(subtrair(5,1));