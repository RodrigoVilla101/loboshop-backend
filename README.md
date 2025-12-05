# 🐺 LoboShop API Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

API RESTful robusta y segura construida con Node.js, Express y MongoDB para la plataforma de e-commerce LoboShop.

Este backend maneja la autenticación de usuarios, la gestión de productos (CRUD), el manejo de categorías y la subida de imágenes.

## ✨ Características Principales

* **Autenticación JWT:** Sistema completo de registro y login basado en JSON Web Tokens (JWT).
* **Seguridad de Contraseñas:** Hashing de contraseñas automático antes de guardar en la base de datos usando `bcryptjs`.
* **Rutas Protegidas:** Middleware de autenticación (`proteger`) para asegurar endpoints que requieren un usuario logueado.
* **CRUD de Productos:** Funcionalidad completa para Crear, Leer, Actualizar y Eliminar productos.
* **Gestión de Categorías:** API para listar y crear categorías de productos.
* **Subida de Imágenes:** Manejo de subida de archivos usando `multer` y `cloudinary`.
* **Scripts de Seeding:** Utilidades para poblar la base de datos con datos iniciales.

## 🛠️ Stack de Tecnologías

* **Node.js**
* **Express**
* **MongoDB** (con **Mongoose**)
* **jsonwebtoken (`jwt`)**
* **bcryptjs**
* **Multer**
* **Cloudinary**
* **dotenv**
* **cors**

## 📂 Estructura del Proyecto

```text
loboshop-backend/
├── config/             # Configuraciones (DB, etc.)
├── controllers/        # Lógica de los endpoints
├── middlewares/        # Middlewares (auth, upload, etc.)
├── models/             # Modelos de Mongoose
├── routes/             # Definición de rutas de la API
├── seeds/              # Datos semilla adicionales
├── uploads/            # Carpeta temporal para subidas
├── .env                # Variables de entorno
├── server.js           # Punto de entrada del servidor
├── seed.js             # Script para poblar categorías
└── seed-productos.js   # Script para poblar productos
```

## 🚀 Instalación y Puesta en Marcha

1.  **Clonar el repositorio**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd loboshop-backend
    ```

2.  **Instalar dependencias**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno**
    Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
    ```env
    # Puerto del servidor
    PORT=3000

    # URL de conexión a tu base de datos MongoDB
    MONGODB_URI=mongodb://localhost:27017/loboshop

    # Clave secreta para firmar los JWT
    JWT_SECRET=tu_clave_secreta_aqui

    # Expiración del token
    JWT_EXPIRE=30d

    # Configuración de Cloudinary (para imágenes)
    CLOUDINARY_CLOUD_NAME=tu_cloud_name
    CLOUDINARY_API_KEY=tu_api_key
    CLOUDINARY_API_SECRET=tu_api_secret
    ```

4.  **Crear carpeta de uploads**
    ```bash
    mkdir uploads
    ```

## 📜 Scripts Disponibles

* **Iniciar servidor en modo desarrollo:**
    ```bash
    npm run dev
    ```
* **Iniciar servidor en modo producción:**
    ```bash
    npm start
    ```
* **Poblar base de datos (seeding):**
    * **Categorías:**
        ```bash
        npm run seed
        ```
    * **Productos:**
        ```bash
        npm run seed-productos
        ```

## 🔌 Endpoints de la API

La URL base de la API es `/api/v1`.

### Autenticación (`/api/v1/auth`)
| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| `POST` | `/registro` | Registra un nuevo usuario. |
| `POST` | `/login` | Inicia sesión y devuelve un token JWT. |
| `GET` | `/perfil` | Obtiene el perfil del usuario autenticado. |

### Productos (`/api/v1/products`)
| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| `GET` | `/` | Obtiene una lista de todos los productos. |
| `GET` | `/:id` | Obtiene un producto por su ID. |
| `GET` | `/mis-productos` | Obtiene los productos del usuario. |
| `POST` | `/` | Crea un nuevo producto. |
| `PUT` | `/:id` | Actualiza un producto. |
| `DELETE` | `/:id` | Elimina un producto. |

### Categorías (`/api/v1/categories`)
| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| `GET` | `/` | Obtiene todas las categorías. |
| `POST` | `/` | Crea una nueva categoría (Admin). |

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request para mejoras.

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

