function pedirPizza(callback) {
    console.log("Pedi a pizza... Agora precisamos esperar.");
    setTimeout(callback, 2000); // Depois de 2 segundos, a pizza chega
}

function pizzaChegou() {
    console.log("A pizza chegou! Vamos comer!");
}

function brincar() {
    console.log("Enquanto a pizza não chega, vou brincar.");
}

pedirPizza(pizzaChegou); // A pizza está a caminho
brincar(); // Enquanto espera, vamos brincar
