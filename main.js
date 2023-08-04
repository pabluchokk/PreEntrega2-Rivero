const suma = (a,b) => a + b
const resta = (a,b) => a - b

class Producto {
    constructor (id, nombre, precio,) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

const productos = [
    new Producto(1,"monitor", 2000),
    new Producto(2, "teclado",1000),
    new Producto(3, "auricular",500),
    new Producto(4, "celular", 3000),
    new Producto(5, "parlante", 400),
]

let buscador = prompt("Ingrese el producto a buscar")

let productoEncontrado = productos.find((producto) => producto.nombre === buscador)

if (productoEncontrado) {
    let mensaje = prompt(`Su producto fue encontrado, es un ${productoEncontrado.nombre} que vale ${productoEncontrado.precio} `)
    alert (mensaje)
} else {
    alert("Su producto no fue encontrado")
}