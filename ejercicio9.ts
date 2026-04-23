class Estudiante {
    public nombre: string;
    public nota: number;

    constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
    }

    verificarNota(): string {
        if (this.nota >= 3) {
            return this.nombre + " aprobó";
        } else {
            return this.nombre + " no aprobó";
        }
    }
}

let estudiante1 = new Estudiante("Sofia", 4.2);
let estudiante2 = new Estudiante("Juan", 2.5);

console.log(estudiante1.verificarNota());
console.log(estudiante2.verificarNota());