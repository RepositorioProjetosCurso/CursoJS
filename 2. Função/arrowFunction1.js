let dobro = function (a) {
    return 2 * a; //Função armazenada em uma váriavel
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; //Return implicito
console.log(dobro(4));

let ola = function () {
    return 'Olá'; //Função armazenada em uma váriavel
}

ola = () => 'Olá!'; // Não possui parametros
ola = _ => 'Olá!'; // Possui um parametro
console.log(ola());