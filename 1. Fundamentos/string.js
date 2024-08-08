const escola = "CSTA É UM COLÉGIO TOP";

console.log(escola.charAt(2));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(2));
console.log(escola.indexOf("A"));

console.log(escola.substring(1));
console.log(escola.substring(1, 3));

console.log('O Colegio '.concat(escola).concat("!"));
console.log('O Colegio ' + escola + "!");
console.log(escola.replace(1, 2));

console.log('Ana,Julio,Claudio'.split(','));