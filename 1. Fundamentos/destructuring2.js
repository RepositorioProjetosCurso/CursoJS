const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 9, 8, 7, 6, 5,];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 9 ,7], [6, 3, 7]];
console.log(nota);