use("renta_videos");

// Crear las colecciones
db.createCollection("clientes");
db.createCollection("peliculas");
db.createCollection("alquileres");

print("================================");
print("BASE DE DATOS CREADA CORRECTAMENTE");
print("================================");

print("Colecciones creadas:");
print("- clientes");
print("- peliculas");
print("- alquileres"); 