// Definición de la interfaz del hotel
interface Reserva {
    id: number;
    nombre: string;
    apellido: string;
    ingreso: number;
}

// Arreglo que contendrá las reservas
let reservas: Reserva[] = [];

// Función para agregar un huesped
function agregarReserva(reserva: Reserva): void {
    reservas.push(reserva);
    console.log(`Reserva '${reserva.nombre}' agregado.`);
}

// Función para buscar huesped por nombre
function buscarReservaPorNombre(nombre: string): Reserva | null {
    return reservas.find(reserva => reserva.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase()) || null;
}

// Función para calcular el ingreso total del hotel
function calcularIngresoHotel(): number {
    if (reservas.length === 0) {
        return 0;
    }
    
    const totalIngreso = reservas.reduce((total, reserva) => total + reserva.ingreso, 0);
    return totalIngreso; // Retorna el total de ingresos
}

// Agregar huespedes
agregarReserva({ id: 134456, nombre: "Cristopher", apellido: "Bueno", ingreso: 34 });
agregarReserva({ id: 134456, nombre: "Duvan", apellido: "Guzmán", ingreso: 12 });
agregarReserva({ id: 134456, nombre: "Santiago", apellido: "Pérez", ingreso: 10 });
agregarReserva({ id: 134456, nombre: "Pepito", apellido: "Sánchez", ingreso: 11 });

// Buscar huesped por nombre
const reservaBuscado = buscarReservaPorNombre("Santiago");
console.log(`Estás buscando a: ${reservaBuscado?.nombre}`);
if (reservaBuscado) {
    console.log(`Reserva encontrada!:
        ID: ${reservaBuscado.id}
        Nombre: ${reservaBuscado.nombre}
        Apellido: ${reservaBuscado.apellido}
        Ingreso: ${reservaBuscado.ingreso}
    `);
}

// Calcular y mostrar el total de ingresos
const totalIngreso = calcularIngresoHotel();
console.log(`\nEl ingreso total del hotel es: $${totalIngreso.toFixed(2)}`);
