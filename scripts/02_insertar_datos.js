// PROYECTO: RENTA DE VIDEOS
// SCRIPT 02: INSERTAR DATOS

use("renta_videos");


db.clientes.insertMany([
    {
        ci: "1234567",
        nombre: "Juan Perez",
        telefono: "71234567",
        correo: "juan@gmail.com"
    },
    {
        ci: "7654321",
        nombre: "Maria Lopez",
        telefono: "72345678",
        correo: "maria@gmail.com"
    },
    {
        ci: "4567890",
        nombre: "Carlos Flores",
        telefono: "73456789",
        correo: "carlos@gmail.com"
    }
]);

db.peliculas.insertMany([
    {
        titulo: "Titanic",
        genero: "Romance",
        anio: 1997,
        disponible: true,
        precioAlquiler: 10
    },
    {
        titulo: "Avatar",
        genero: "Ciencia ficcion",
        anio: 2009,
        disponible: true,
        precioAlquiler: 15
    },
    {
        titulo: "Jurassic Park",
        genero: "Aventura",
        anio: 1993,
        disponible: true,
        precioAlquiler: 12
    }
]);


db.alquileres.insertMany([
    {
        clienteId: "1234567",
        pelicula: "Titanic",
        fechaAlquiler: new Date("2026-11-01"),
        fechaDevolucion: new Date("2026-11-05"),
        estado: "Devuelto"
    },
    {
        clienteId: "7654321",
        pelicula: "Avatar",
        fechaAlquiler: new Date("2026-11-03"),
        fechaDevolucion: new Date("2026-11-07"),
        estado: "Pendiente"
    }
]);

print("================================");
print("DATOS INSERTADOS CORRECTAMENTE");
print("================================");

print("3 clientes registrados.");
print("3 peliculas registradas.");
print("2 alquileres registrados.");
