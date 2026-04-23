//3. Define una interfaz Persona con nombre, edad y
//  un método que retorne un mensaje personalizado.
//  Luego crea un objeto que la implemente.

interface Persona {
    nombre: string;
    edad: number;
    mensajePersonalizado(): string;
}

const persona1: Persona = {
    nombre: "Juan",
    edad: 30,
    mensajePersonalizado() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
};

console.log(persona1.mensajePersonalizado());
