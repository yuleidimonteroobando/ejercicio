//8. Crea una función genérica que reciba un arreglo
//  de cualquier tipo y retorne el último elemento.
function obtenerUltimoElemento<T>(arreglo: T[]): T {
  return arreglo[arreglo.length - 1];
}
