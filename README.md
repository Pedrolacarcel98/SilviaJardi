# SilviaJardí

**Tienda online de ropa infantil hecha a mano con telas orgánicas certificadas.**

---

## 📋 Descripción

**SilviaJardí** es una tienda virtual de ropa artesanal para bebés y niños, confeccionada por Silvia con telas orgánicas certificadas (GOTS). El proyecto busca ofrecer productos de alta calidad, sostenibles y con un diseño cuidado, respetando los procesos de costura tradicionales.

### ✨ Características Principales

- **E-commerce completo**: Catálogo de productos, carrito de compra, checkout y pasarela de pago
- **Gestión de productos**: Admin para crear, editar y eliminar productos (con imágenes, categorías y tallas)
- **Gestión de pedidos**: Panel de control para visualizar y gestionar pedidos recibidos
- **Autenticación segura**: Registro e inicio de sesión de usuarios con control de acceso
- **Diseño responsive**: Web adaptable a móviles, tablets y ordenadores
- **Tecnología**: React, Node.js, Express y MySQL

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React**: Biblioteca de JavaScript para la interfaz de usuario
- **Vite**: Entorno de desarrollo rápido y empaquetador
- **Tailwind CSS**: Framework para estilos rápidos y customizables
- **React Router**: Enrutamiento entre páginas
- **Axios**: Cliente HTTP para llamadas a la API

### Backend

- **Node.js**: Entorno de ejecución JavaScript
- **Express**: Framework para crear la API
- **MySQL**: Base de datos relacional
- **bcryptjs**: Encriptación de contraseñas
- **jsonwebtoken**: Autenticación JWT
- **cors**: Gestión de políticas de Cross-Origin Resource Sharing
- **dotenv**: Variables de entorno

### Herramientas

- **Git**: Control de versiones
- **GitHub**: Repositorio público
- **Antigravity**: Entorno de desarrollo AI

---

## 📂 Estructura del Proyecto

El proyecto está dividido en dos partes principales:

```
SilviaJardi/
├── client/                # Frontend (aplicación React)
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── pages/         # Páginas de la aplicación
│   │   ├── services/      # Peticiones a la API
│   │   └── ...            # Otros módulos
│   └── package.json
├── server/                # Backend (API REST)
│   ├── config/            # Configuración (db.js, middleware.js)
│   ├── routes/            # Rutas de la API
│   │   ├── products.js    # Productos
│   │   ├── auth.js        # Autenticación
│   │   └── orders.js      # Pedidos
│   ├── server.js          # Punto de entrada
│   └── package.json
├── .env                   # Variables de entorno
└── README.md              # Documentación
```

---

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/SilviaJardi.git
cd SilviaJardi
```

### 2. Configurar la base de datos MySQL

- Crear una base de datos:
  ```sql
  CREATE DATABASE silviajardi_db;
  ```

- Importar el esquema SQL (si existe `database.sql`)
- Configurar variables de entorno en `.env` (ver [Ejemplo de .env](#-ejemplo-de-env))

### 3. Backend

```bash
cd server
npm install
npm start
```

La API estará disponible en `http://localhost:3001`

### 4. Frontend

```bash
cd client
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 🔐 Administración

### Credenciales de administrador

- **Email**: [EMAIL_ADDRESS]`
- **Contraseña**: `admin123`

### URLs de administración

- **Login**: `http://localhost:5173/admin/login`
- **Dashboard**: `http://localhost:5173/admin/dashboard`
- **Productos**: `http://localhost:5173/admin/products`

---

## 🔌 API Endpoints

### Autenticación

| Método | Ruta | Descripción |
|--------|------|-------------|
| `POST` | `/api/auth/register` | Registrar usuario |
| `POST` | `/api/auth/login` | Iniciar sesión |
| `POST` | `/api/auth/admin/login` | Login administrador |
| `GET` | `/api/auth/me` | Obtener perfil del usuario |

### Productos

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/products` | Listar todos los productos |
| `GET` | `/api/products/:id` | Obtener producto por ID |
| `POST` | `/api/products` | Crear producto (admin) |
| `PUT` | `/api/products/:id` | Actualizar producto (admin) |
| `DELETE` | `/api/products/:id` | Eliminar producto (admin) |

### Pedidos

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/orders` | Listar pedidos (admin) |
| `GET` | `/api/orders/:id` | Obtener pedido por ID (admin) |
| `POST` | `/api/orders` | Crear pedido |
| `GET` | `/api/orders/user/:userId` | Mis pedidos (usuario) |

---

## 📊 Estructura de la Base de Datos

### Tablas principales:

- **users** - Usuarios y administradores
- **products** - Productos de la tienda
- **categories** - Categorías de productos
- **sizes** - Tallas disponibles
- **images** - Imágenes de productos
- **orders** - Pedidos realizados
- **order_items** - Artículos de los pedidos

### Esquema general:

```
users (id, email, password, role, ...)
products (id, name, description, price, category_id, ...)
orders (id, user_id, total_amount, status, ...)
```

---

## 📱 Telas Orgánicas Certificadas

**SilviaJardí** utiliza exclusivamente telas con certificación **GOTS (Global Organic Textile Standard)**, lo que garantiza:

- Producción sostenible con mínimo impacto ambiental
- Tintes no tóxicos
- Condiciones laborales justas
- Trazabilidad completa de la cadena de producción

---

## 👥 Creadores

### Desarrollador

**Antigravity AI** — Entorno de desarrollo asistido por inteligencia artificial

### Propietario

**SilviaJardí** — Creadora y diseñadora de la tienda

---

## 📄 Licencia

Este proyecto es de código cerrado. Para uso comercial o distribución, por favor contactar al propietario.
