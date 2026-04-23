//7. Define una interfaz Empresa que contenga un arreglo de empleados
//  y crea una función que muestre todos los nombres de los empleados.
interface Empresa {
  empleados: Empleado[];
}

interface Empleado {
  nombre: string;
}

function mostrarNombresEmpleados(empresa: Empresa) {
  empresa.empleados.forEach(empleado => {
    console.log(empleado.nombre);
  });
}