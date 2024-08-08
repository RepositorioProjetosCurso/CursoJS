const valores = [7.7, 8.6, 4.3, 7.9];
console.log(valores[1], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push(false, null, NaN, {id: 3});
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log(valores);

console.log(typeof valores);