//2. Crea una función que reciba un arreglo de números y
//  retorne la suma total de sus elementos.
function sumarArreglo(numeros: number[]): number {
    let suma: number = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma;
}

console.log(sumarArreglo([1, 2, 3, 4, 5]));