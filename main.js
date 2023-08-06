/* class Producto {
    constructor (id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
};

const productos = [
    new Producto(1,"monitor", 2000),
    new Producto(2, "teclado",1000),
    new Producto(3, "auricular",500),
    new Producto(4, "celular", 3000),
    new Producto(5, "parlante", 400),
];

let seguirComprando = true;

while (seguirComprando) {
    let buscador = prompt("Ingrese el producto a buscar")
    let productoEncontrado = productos.find((producto) => producto.nombre === buscador);

    if (productoEncontrado) {
        let mensaje = prompt(`Su producto fue encontrado, es un ${productoEncontrado.nombre} que vale ${productoEncontrado.precio} Desea comprarlo? (Si/No)`)
        if (mensaje.toLowerCase() === "si") {
            alert("¡Gracias por su compra!");
        } else {
            alert("Producto encontrado, pero no se realizó la compra");
        }

        let seguirComprandoRespuesta = prompt("¿Desea buscar otro producto? Si/No");

        seguirComprando = seguirComprandoRespuesta.toLowerCase() === "si"
}
} */

class Producto {
    constructor (id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [
    new Producto(1, "monitor", 2000),
    new Producto(2, "teclado", 1000),
    new Producto(3, "auricular", 500),
    new Producto(4, "celular", 3000),
    new Producto(5, "parlante", 400),
]

function buscarProducto(nombre) {
    return productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase())
}

function comprarProducto (producto) {
    let mensaje = prompt(`Su producto fue encontrado, es un ${producto.nombre} que vale $${producto.precio}. Desea comprarlo? (Si/No)`)

    if (mensaje.toLowerCase() === "si") {
        alert("¡Gracias por su compra!");
    } else {
        alert ("Producto encontrado, pero no se realizó la compra")
    }
}

let seguirComprando = true
while (seguirComprando) {
    let buscador = prompt("Ingrese el producto a buscar:")
    let productoEncontrado = buscarProducto(buscador)

    if (productoEncontrado) {
        comprarProducto(productoEncontrado)
    } else {
        alert("Producto no encontrado")

        let seguirComprandoRespuesta = prompt("¿Desea buscar otro producto? (Si/No)")
        seguirComprando = seguirComprandoRespuesta.toLowerCase() === "si";
    }
}

let agregarProducto = prompt("¿Desearía añadir algún producto a nuestro catalogo? (Si/No)")

if (agregarProducto.toLowerCase() === "si") {
    let newId = Number(prompt("Ingrese el ID del nuevo producto"));
    let newName = prompt("Ingrese el nombre del nuevo producto")
    let newPrecio = Number(prompt("Ingrese el precio que deberia tener el producto"))

    const nuevoProducto = new Producto (newId, newName, newPrecio)
    productos.push(nuevoProducto)

    alert("El nuevo producto ha sido añadido al catalogo:")
    let catalogo = "Así quedó nuestro catalogo de productos \n";
    productos.forEach(producto => {
        catalogo += `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio} \n`
    })

    alert(catalogo)
}