const divisao = function (dividendo, divisor) {
    let quociente = dividendo / divisor;
    let restoDaDivisao = dividendo % divisor;
    console.log(quociente.toPrecision(3));
    console.log(restoDaDivisao);
    
}

divisao(10, 3);
console.log();
divisao(7, 3);
console.log();
divisao(45, 7);
console.log();
divisao(6, 7);