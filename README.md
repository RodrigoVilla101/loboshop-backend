# 🐺 LoboShop API Backend

API RESTful robusta y segura construida con Node.js, Express y MongoDB para la plataforma de e-commerce LoboShop.

Este backend maneja la autenticación de usuarios, la gestión de productos (CRUD), el manejo de categorías y la subida de imágenes.

## ✨ Características Principales

* **Autenticación JWT:** Sistema completo de registro y login basado en JSON Web Tokens (JWT).
* **Seguridad de Contraseñas:** Hashing de contraseñas automático antes de guardar en la base de datos usando `bcryptjs`.
* **Rutas Protegidas:** Middleware de autenticación (`proteger`) para asegurar endpoints que requieren un usuario logueado.
* **CRUD de Productos:** Funcionalidad completa para Crear, Leer, Actualizar y Eliminar productos, asociándolos a un vendedor (usuario) y una categoría.
* **Gestión de Categorías:** API para listar y crear categorías de productos.
* **Subida de Imágenes:** Manejo de subida de archivos (imágenes de productos) usando `multer`.
* **Scripts de Seeding:** Utilidades para poblar la base de datos con datos iniciales (categorías y productos) [cite: rodrigovilla101/loboshop-backend/loboshop-backend-f38b93fd8efd2e294ee41b6ca9b92ad5e2eeda70/package.json, rodrigovilla101/loboshop-backend/loboshop-backend-f38b93fd8efd2

