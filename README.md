
Integrantes de grupo: 
Elvis Mamani Quispe
Hugo Marcelo Nina Garcia 
Brayan Oruña Guarachi 
Adriana Micaela Torrejón Peña

# SISTEMA DE RENTA DE VIDEOS

## 1. Descripción del proyecto

El presente proyecto consiste en la implementación de una base de datos NoSQL utilizando MongoDB para administrar un sistema de renta de videos.

El sistema permite registrar clientes, almacenar información de películas, registrar alquileres y realizar consultas sobre la información almacenada.

## 2. Objetivo general

Diseñar e implementar una base de datos en MongoDB que permita gestionar las operaciones principales de una empresa de renta de videos.

## 3. Tecnologías utilizadas

- MongoDB
- MongoDB Shell (mongosh)
- JavaScript
- Visual Studio Code
- Git y GitHub

## 4. Estructura del proyecto

```text
RENTA-DE-VIDEOS/
│
├── README.md
│
├── scripts/
│   ├── 01_crear_bd.js
│   ├── 02_insertar_datos.js
│   └── 03_consultas.js
│
└── capturas/
```

## 5. Colecciones de la base de datos

### Clientes
Almacena los datos personales de los clientes, como CI, nombre, teléfono y correo electrónico.

### Películas
Almacena el título, género, año, disponibilidad y precio de alquiler de cada película.

### Alquileres
Registra los alquileres realizados, incluyendo el cliente, película, fecha de alquiler, fecha de devolución y estado.

## 6. Implementación

Para implementar la base de datos se deben seguir estos pasos:

1. Instalar MongoDB y MongoDB Shell.
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecutar el script de creación:

   mongosh scripts/01_crear_bd.js

4. Ejecutar el script de inserción:

   mongosh scripts/02_insertar_datos.js

5. Ejecutar el script de consultas:

   mongosh scripts/03_consultas.js

## 7. Capturas de pantalla

### 7.1 Creación de la base de datos
Pendiente de incorporar captura.

### 7.2 Inserción de documentos
Pendiente de incorporar captura.

### 7.3 Ejecución de consultas
Pendiente de incorporar captura.

## 8. Conclusión

La implementación permite administrar la información de clientes, películas y alquileres mediante MongoDB, demostrando el uso de bases de datos NoSQL, inserción de documentos y consultas.
 