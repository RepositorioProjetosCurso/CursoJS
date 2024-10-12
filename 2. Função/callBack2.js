const notas = [8, 9.6, 10, 5.6, 0.9, 7.4, 5.8, 3.4, 4.9];

// Sem Callback
let notasBaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]);       
    }
}
console.log(notasBaixas1);

// Com Callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
});
console.log(notasBaixas2);

const notasBaixas3 = notas.filter(nota => nota < 7);
console.log(notasBaixas3);