// Definición de la interfaz Estudiante 
interface Estudiante {
    nombre: string;
    apellido: string;
    nota: number;
}

// Arreglo que contendrá los estudiantes
let estudiantes: Estudiante[] = [];

// Función para agregar un estudiante
function agregarEstudiante(estudiante: Estudiante): void {
    estudiantes.push(estudiante);
    console.log(`Estudiante '${estudiante.nombre}' agregado.`);
}

// Función para buscar estudiantes por nombre
function buscarEstudiantePorNombre(nombre: string): Estudiante | null {
    return estudiantes.find(estudiante => estudiante.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase()) || null;
}

// Función para calcular el promedio de notas
function calcularPromedioNotas(): number {
    if (estudiantes.length === 0) {
        return 0;
    }
    
    const totalNotas = estudiantes.reduce((total, estudiante) => total + estudiante.nota, 0);
    return totalNotas / estudiantes.length;
}

// Agregar estudiantes
agregarEstudiante({ nombre: "Cristopher", apellido: "Bueno", nota: 34 });
agregarEstudiante({ nombre: "Duvan", apellido: "Guzmán", nota: 12 });
agregarEstudiante({ nombre: "Santiago", apellido: "Pérez", nota: 10 });
agregarEstudiante({ nombre: "Pepito", apellido: "Sánchez", nota: 11 });

// Buscar estudiante por nombre
const estudianteBuscado = buscarEstudiantePorNombre("Santiago");
console.log(`Estás buscando a: ${estudianteBuscado?.nombre}`);
if (estudianteBuscado) {
    console.log(`Estudiante encontrado!:
        Nombre: ${estudianteBuscado.nombre}
        Apellido: ${estudianteBuscado.apellido}
        Nota: ${estudianteBuscado.nota}
    `);
}

// Calcular y mostrar el promedio de notas
const notaPromedio = calcularPromedioNotas();
console.log(`\nLa nota promedio de los estudiantes es: ${notaPromedio.toFixed(2)}`);
