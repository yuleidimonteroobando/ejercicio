//10. Crea una interfaz genérica Respuesta<T> que tenga: 
// • un campo data • un campo status Luego crea dos ejemplos:
//  uno con string y otro con número.
// ejercicio10.ts

interface Respuesta<T> {
    data: T;
    status: number;
}

let respuestaTexto: Respuesta<string> = {
    data: "Proceso completado",
    status: 200
};

let respuestaNumero: Respuesta<number> = {
    data: 1500,
    status: 201
};

console.log(respuestaTexto);
console.log(respuestaNumero);