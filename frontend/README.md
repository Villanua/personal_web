# Villanua Web - Frontend

Frontend estático para la página web personal de Ignacio Villanúa.

## 📁 Estructura del Proyecto

```
frontend/
│
├── index.html          # Página principal
├── assets/             # Recursos estáticos
│   ├── css/           # Archivos de estilos
│   │   ├── styles.css
│   │   ├── navbar.css
│   │   ├── home.css
│   │   ├── about_me.css
│   │   └── chatbot.css
│   ├── js/            # Scripts JavaScript
│   │   ├── main.js    # Lógica general y UI
│   │   ├── chatbot.js # Lógica del chatbot
│   │   └── api.js     # Funciones para llamadas al backend
│   └── img/           # Imágenes
│       └── logo.png
├── components/        # (Opcional) Fragmentos HTML reutilizables
└── vendor/            # (Opcional) Librerías externas
```

## 🚀 Cómo usar

### Opción 1: Servidor local simple con Python

```bash
# Python 3
python -m http.server 8080

# Luego abre http://localhost:8080 en tu navegador
```

### Opción 2: Servidor local con Node.js

```bash
# Instalar http-server globalmente
npm install -g http-server

# Ejecutar servidor
http-server -p 8080

# Luego abre http://localhost:8080 en tu navegador
```

### Opción 3: Live Server (VS Code)

1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

## 🔧 Configuración del Backend

El frontend está configurado para conectarse a un backend FastAPI. Para cambiar la URL del backend, edita:

**En `assets/js/chatbot.js`:**
```javascript
const CHATBOT_CONFIG = {
    apiBaseURL: 'http://localhost:8000', // Cambia esta URL
    endpoint: '/api/adabot'
};
```

**En `assets/js/api.js`:**
```javascript
const API_CONFIG = {
    baseURL: 'http://localhost:8000', // Cambia esta URL
    endpoints: {
        chatbot: '/api/adabot'
    }
};
```

## 📦 Dependencias Externas (CDN)

El proyecto usa las siguientes librerías desde CDN:

- **Bootstrap 5.3.3** - Framework CSS
- **Font Awesome 6.7.2** - Iconos
- **Typed.js 2.1.0** - Efectos de texto animado
- **jQuery 3.2.1** - Manipulación del DOM

## 🌐 Despliegue

### GitHub Pages

1. Sube el contenido de `frontend/` a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama y carpeta
4. Guarda y espera a que se despliegue

### Netlify

1. Arrastra la carpeta `frontend/` a [Netlify Drop](https://app.netlify.com/drop)
2. O conecta tu repositorio de GitHub

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
cd frontend
vercel
```

## 🎨 Personalización

### Cambiar colores
Edita los archivos CSS en `assets/css/`

### Modificar contenido
Edita `index.html` directamente

### Añadir nuevas páginas
Crea nuevos archivos HTML y enlázalos desde `index.html`

## 📝 Notas

- El chatbot requiere un backend FastAPI funcionando
- Las imágenes deben estar en `assets/img/`
- Para producción, considera minificar CSS y JS
- Los estilos están organizados por componente para facilitar el mantenimiento

## 🔒 Seguridad

- Se implementa escape de HTML en los mensajes del chatbot para prevenir XSS
- No se almacenan credenciales en el frontend
- Todas las llamadas a la API usan HTTPS en producción (configúralo en tu backend)

## 📧 Contacto

Ignacio Villanúa Cuenca
- LinkedIn: [ignacio-villanua-cuenca](https://www.linkedin.com/in/ignacio-villanua-cuenca/)
- GitHub: [Villanua](https://github.com/Villanua)
