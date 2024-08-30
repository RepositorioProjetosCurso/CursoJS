function tratarErroELancar(erro) {
    throw new Error("O erro a seguir está sendo tratado");
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) {
        tratarErroELancar(e);
    } finally {
        console.log("Final");
    }
    
}

const obj = {nome: 'Rivaldo'};
imprimirNomeGritado(obj);