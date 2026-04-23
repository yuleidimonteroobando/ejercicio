//5. Implementa una función que reciba un objeto de tipo Empleado 
// (con nombre y salario) y retorne un mensaje indicando
//  si su salario es alto o bajo.
interface Empleado {
    nombre: string;
    salario: number;
}
function evaluarSalario(empleado: Empleado): string {
    if (empleado.salario >= 2000) {
        return empleado.nombre + "  salario alto";
    } else {
        return empleado.nombre + " salario bajo";
    }
}

let empleado1: Empleado = {
    nombre: "Sofia",
    salario: 2500
};

let empleado2: Empleado = {
    nombre: "Juan",
    salario: 1500
};

console.log(evaluarSalario(empleado1));
console.log(evaluarSalario(empleado2));
