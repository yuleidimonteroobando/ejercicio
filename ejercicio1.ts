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