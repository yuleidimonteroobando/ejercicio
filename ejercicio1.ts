//1. Declara una variable que pueda almacenar número o string y
//  crea una función que valide si el valor es número; si lo es,
//  multiplícalo por 2, si es texto, muéstralo en mayúsculas.

let valor: number | string;

valor = "hola";

function validarValor(dato: number | string): void {
    if (!isNaN(Number(dato))) {
        console.log(Number(dato) * 2);
    } else {
        console.log(dato.toString().toUpperCase());
    }
}

validarValor(valor);