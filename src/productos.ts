// Definición de la interfaz Producto
interface Producto {
    nombre: string;
    descripcion: string;
    valor: number;
}

// Arreglo que contendrá los productos
let productos: Producto[] = [];

// Función para agregar un producto al inventario
function agregarProducto(producto: Producto): void {
    productos.push(producto); // Cambiar 'producto' a 'productos'
    console.log(`Producto '${producto.nombre}' agregado.`);
}

// Función para buscar productos por nombre
function buscarProductoPorNombre(nombre: string): Producto | null {
    return productos.find(prod => prod.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase()) || null;
}

// Función para calcular el total del inventario
function calcularTotalInventario(): number {
    if (productos.length === 0) {
        return 0;
    }

    const totalInventario = productos.reduce((total, producto) => total + producto.valor, 0);
    return totalInventario; // Cambiar para retornar solo el total
}

// Agregar productos al inventario
agregarProducto({ nombre: "Cerveza", descripcion: "rica y refrescante", valor: 6500 });
agregarProducto({ nombre: "Manzanas", descripcion: "Dulces y deliciosas", valor: 1200 });
agregarProducto({ nombre: "arroz", descripcion: "El mas delicioso sabor", valor: 2000 });

// Buscar producto por nombre
const productoBuscado = buscarProductoPorNombre("Santiago");
console.log(`Estás buscando a: ${productoBuscado?.nombre}`);
if (productoBuscado) {
    console.log(`Producto encontrado!:
        Nombre: ${productoBuscado.nombre}
        Descripción: ${productoBuscado.descripcion}
        Valor: $${productoBuscado.valor}
    `);
}

// Calcular y mostrar el total del inventario
const totalInventario = calcularTotalInventario();
console.log(`\nEl valor total del inventario es: $${totalInventario.toFixed(2)}`);
