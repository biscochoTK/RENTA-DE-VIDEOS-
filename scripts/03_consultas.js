// PROYECTO: RENTA DE VIDEOS
// SCRIPT 03: CONSULTAS

use("renta_videos");

print("\n===== LISTA DE CLIENTES =====");
db.clientes.find().pretty();

print("\n===== LISTA DE PELICULAS =====");
db.peliculas.find().pretty();

print("\n===== PELICULAS DISPONIBLES =====");
db.peliculas.find({ disponible: true }).pretty();

print("\n===== PELICULAS DE AVENTURA =====");
db.peliculas.find({ genero: "Aventura" }).pretty();

print("\n===== HISTORIAL DE ALQUILERES =====");
db.alquileres.find().pretty();

print("\n===== ALQUILERES PENDIENTES =====");
db.alquileres.find({ estado: "Pendiente" }).pretty();

print("\n===== BUSCAR CLIENTE =====");
db.clientes.find({ ci: "1234567" }).pretty();

print("\nCONSULTAS FINALIZADAS.");
