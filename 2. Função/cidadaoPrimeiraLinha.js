// Criar de forma literal
function fun1() {

}

// Armazenando em uma variavel
const fun2 = function () {

}

// Armazenando em um array
const array = [function (a, b) {return a + b}, fun1, fun2];
console.log(array[0](2, 3));

// Armazenar em um atributo de objeto
const obj = { }
obj.falar = function() {return 'Opa!'}
console.log(obj.falar());

// Passar função como parametro
function run (funcao) {
    funcao();
}

run(function() { console.log("Executando...") } );

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(1, 2)(8);
const cincoMais = soma(1, 2);
cincoMais(8);