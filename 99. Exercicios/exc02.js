const triangulos = function(a, b, c) {
    if (a === b && b === c) {
        console.log("O triangulo é Equilátero!!");
    } else if (a == b || b == c) {
        console.log("O triangulo é Isósceles!!");
    } else if(a != b && b != c) {
        console.log("O triangulo é Escaleno!!");
    } else {
        console.log("Inválido!!");
    }
}

triangulos(23, 23, 23);
triangulos(10, 90, 90);
triangulos(11, 5, 15);