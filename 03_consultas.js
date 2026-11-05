use("renta_videos");

print("\n===== LISTA DE CLIENTES =====");
printjson(db.clientes.find().toArray());

print("\n===== LISTA DE PELICULAS =====");
printjson(db.peliculas.find().toArray());

print("\n===== PELICULAS DISPONIBLES =====");
printjson(db.peliculas.find({ disponible: true }).toArray());

print("\n===== PELICULAS DE AVENTURA =====");
printjson(db.peliculas.find({ genero: "Aventura" }).toArray());

print("\n===== HISTORIAL DE ALQUILERES =====");
printjson(db.alquileres.find().toArray());

print("\n===== ALQUILERES PENDIENTES =====");
printjson(db.alquileres.find({ estado: "Pendiente" }).toArray());

print("\n===== BUSCAR CLIENTE =====");
printjson(db.clientes.find({ ci: "1234567" }).toArray());

print("\nCONSULTAS FINALIZADAS."); 