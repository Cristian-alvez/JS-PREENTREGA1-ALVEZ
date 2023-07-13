const productosDisponibles = [
    { nombre: "Alfajor", precio: 50 },
    { nombre: "Medialunas", precio: 30 },
    { nombre: "Cafe", precio: 40 }];

function agregarProducto() {
    const carrito = [];
    let total = 0;
    while (true) {
    let opcion = parseInt(prompt(
        "¿Qué deseas hacer?\n" +
        "1. Agregar producto\n" +
        "2. Eliminar producto\n" +
        "3. Finalizar compra"));

switch (opcion) {
    case 1:
        total += agregar(carrito);
        break;
    case 2:
        total -= eliminar(carrito);
        break;
    case 3:
        finalizarCompra(carrito, total);
        return;
        default:
        alert("Opción inválida. Por favor, elige una opción válida.");}
}}

function agregar(carrito) {
    let mensaje = "Productos disponibles:\n";

    for (let i = 0; i < productosDisponibles.length; i++) {
    let producto = productosDisponibles[i];
    mensaje += `${i + 1}. ${producto.nombre} ($${producto.precio})\n`;}

    let productoIndex = parseInt(prompt(mensaje + "Ingrese el número del producto que desea agregar:")) - 1;

    if (!isNaN(productoIndex) && productoIndex >= 0 && productoIndex < productosDisponibles.length) {
        let productoElegido = productosDisponibles[productoIndex];
        carrito.push(productoElegido);
        alert(`Se agregó ${productoElegido.nombre} al carrito. Precio: $${productoElegido.precio}`);
        return productoElegido.precio;
    } else {
    alert("Opción inválida. Por favor, ingrese un número válido.");
    return 0;
    }
}

function eliminar(carrito) {
    if (carrito.length === 0) {
    alert("El carrito esta vacio bro. No hay productos.");
    return 0;
    }

    let producto = prompt("Ingrese el nombre del producto que desea eliminar:");

    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre.toLowerCase() === producto.toLowerCase()) {
        let precioEliminado = carrito[i].precio;
        carrito.splice(i, 1);
        alert(`Se eliminó ${producto} del carrito. Precio eliminado: $${precioEliminado}`);
        return precioEliminado;
        }
    }

    alert(`No se encontró el producto ${producto} en el carrito.`);
    return 0;}

function finalizarCompra(carrito, total) {
    if (carrito.length === 0) {
    alert("El carrito está vacío. No se puede finalizar la compra.");
    return;
    }

    alert(`Gracias por su compra! Total a pagar: $${total}`);
}

agregarProducto();