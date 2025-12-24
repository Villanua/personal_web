# Villanua Web - Frontend

Frontend de la aplicación web personal de Villanua con portfolio y chatbot.

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

El servidor se iniciará en `http://localhost:3000`

### Producción

```bash
npm start
```

## 📁 Estructura del Proyecto

```
frontend/
├── public/              # Archivos estáticos
│   ├── index.html      # Página principal
│   ├── css/            # Estilos
│   ├── js/             # JavaScript del cliente
│   └── img/            # Imágenes
├── server.js           # Servidor Node.js/Express
├── package.json        # Dependencias y scripts
└── .env                # Variables de entorno
```

## 🔧 Configuración

Crea un archivo `.env` en la raíz del proyecto:

```env
PORT=3000
API_BASE_URL=http://localhost:8000
NODE_ENV=development
```

## 📦 Scripts Disponibles

- `npm start` - Inicia el servidor en modo producción
- `npm run dev` - Inicia el servidor con nodemon (recarga automática)

## 🌐 Deploy en Hostinger

1. Sube el proyecto a tu repositorio Git
2. En Hostinger, conecta el repositorio
3. Configura las variables de entorno en el panel de Hostinger
4. El comando de inicio será: `npm start`

## 🔗 Backend

Este frontend se conecta a un backend FastAPI. Asegúrate de configurar la URL correcta en el archivo `.env`.
