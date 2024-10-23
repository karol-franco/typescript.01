// Definición de la interfaz Empleado
interface Empleado {
    nombre: string;
    apellido: string;
    puesto: string;
    salario: number;
}

// Arreglo que contendrá los empleados
let empleados: Empleado[] = [];

// Función para agregar un empleado a la empresa
function agregarEmpleado(empleado: Empleado): void {
    empleados.push(empleado);
    console.log(`Empleado '${empleado.nombre}' agregado.`);
}

// Función para buscar empleados por nombre
function buscarEmpleadoPorNombre(nombre: string): Empleado | null {
    return empleados.find(empleado => empleado.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase()) || null;
}

// Función para calcular el salario promedio
function calcularSalarioPromedio(): number {
    if (empleados.length === 0) {
        return 0;
    }
    
    const totalSalarios = empleados.reduce((total, empleado) => total + empleado.salario, 0);
    return totalSalarios / empleados.length;
}

agregarEmpleado({nombre: "Critopher", apellido: "Bueno", puesto: "Gerente", salario: 6500000})
agregarEmpleado({nombre: "Duvan", apellido: "Guzman", puesto: "Cocinero", salario: 1200000})
agregarEmpleado({nombre: "Santiago", apellido: "perez", puesto: "Ayudante", salario: 1000000})
agregarEmpleado({nombre: "Pepito", apellido: "Sanchez", puesto: "Aceador", salario: 1100000})

const empleadoBuscado = buscarEmpleadoPorNombre ("Santiago")
console.log(`Estas buscando a: ${empleadoBuscado?.nombre}`)
if(empleadoBuscado){
    console.log(`Empleado/a encontrado/a!:
        Nombre: ${empleadoBuscado.nombre}
        Apellido: ${empleadoBuscado.apellido}
        Puesto: ${empleadoBuscado.puesto}
        Salario: ${empleadoBuscado.salario}
        
        `)
}
//calcular y mostrar el salario promedio
const salarioPromedio = calcularSalarioPromedio();
console.log(`\nEl salario promedio de los empleados es: $${salarioPromedio.toFixed(2)}`);
