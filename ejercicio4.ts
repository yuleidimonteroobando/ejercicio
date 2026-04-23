//4. Crea un arreglo de objetos usando una interfaz Producto (nombre, precio)
//  y muestra solo los productos con precio mayor a 50.
interface Producto {
    nombre: string;
    precio: number;
}

const productos: Producto[] = [
    { nombre: "Producto 1", precio: 30 },
    { nombre: "Producto 2", precio: 60 },
    { nombre: "Producto 3", precio: 40 },
    { nombre: "Producto 4", precio: 80 }
];

const productosFiltrados = productos.filter(producto => producto.precio > 50);

console.log(productosFiltrados);