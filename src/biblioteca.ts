type Libro = {
    titulo: string;
    autor: string;
    anioPublicacion: number;
};

let biblioteca: Libro[] = [];

// Agregar libros
function agregarLibro(libro: Libro): void {
    biblioteca.push(libro);
}

// Búsqueda de libros por título
function buscarLibroPorTitulo(titulo: string): Libro | null {
    return biblioteca.find(libro => libro.titulo.toLocaleLowerCase() === titulo.toLocaleLowerCase()) || null;
}

// Función para mostrar los libros disponibles
function mostrarLibros(): void {
    if (biblioteca.length === 0) {
        console.log('No hay libros disponibles en la biblioteca');
        return;
    } else {
        console.log('Libros disponibles en la biblioteca:');
        biblioteca.forEach(libro => {
            console.log(`\n- Título: ${libro.titulo} \nAño de publicación: ${libro.anioPublicacion}`);
        });
    }
}

// Agregar libros nuevos
agregarLibro({titulo: "La historia del loco", autor: "Jhon Kasebatch", anioPublicacion: 2017});
agregarLibro({titulo: "Una escalera al cielo", autor: "Mario Menendez", anioPublicacion: 2014});
agregarLibro({titulo: "El estudiante", autor: "Jhon Kasebatch", anioPublicacion: 2002});
agregarLibro({titulo: "Frankestein", autor: "Pepito Perez", anioPublicacion: 2015});

mostrarLibros();

// Buscar libro por nombre
const libroBuscado = buscarLibroPorTitulo("El estudiante");
if (libroBuscado) {
    console.log(`\nLibro encontrado: \n\tTítulo: ${libroBuscado.titulo}\n\tAutor: ${libroBuscado.autor}\n\tAño de publicación: ${libroBuscado.anioPublicacion}`);
} else {
    console.log('Libro no encontrado.');
}
