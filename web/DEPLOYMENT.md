# Guía del Proyecto: Desarrollo Local y Despliegue en Vercel

Esta guía te explicará cómo trabajar en el proyecto desde tu ordenador (local), cómo guardar los cambios, y cómo hacer que esos cambios se reflejen en tu servidor en producción (Vercel).

---

## 💻 1. Desarrollo en Local (Tu Ordenador)

Para trabajar cómodamente en tu ordenador con recarga automática (hot-reload), usamos Node.js y Next.js. 

### Prerrequisitos
- Tener **Node.js** instalado en tu PC (versión 20 o superior).
- Tener **Git** instalado.

### Pasos para iniciar el entorno de desarrollo
1. Abre una terminal y navega a la carpeta del proyecto (`web`).
2. Instala las dependencias (solo la primera vez o si añades librerías nuevas):
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre tu navegador y entra en `http://localhost:3000`. 
   > **Nota:** Cualquier cambio que hagas en el código (archivos `.tsx` o `.css`) se reflejará al instante en tu navegador sin necesidad de recargar la página.

---

## 🚀 2. Subir tus cambios al repositorio

Una vez hayas terminado de programar y estés contento con cómo se ve en tu ordenador, debes subir esos cambios a la "nube" (GitHub) para que el servidor (Vercel) pueda detectarlos y actualizar la web.

En la terminal (puedes abrir una nueva o detener el servidor con `Ctrl+C`), ejecuta:

```bash
# 1. Prepara todos los archivos que has modificado
git add .

# 2. Crea un "paquete" con los cambios y ponle un mensaje descriptivo
git commit -m "Añadida nueva sección en la página principal"

# 3. Sube los cambios al repositorio remoto
git push
```

---

## 🌍 3. Reflejar los cambios en el Servidor (Vercel)

Vercel está conectado directamente a tu repositorio de GitHub. Esto significa que el proceso de despliegue es **100% automático**.

1. En cuanto ejecutes `git push` en tu ordenador, Vercel detectará el cambio automáticamente.
2. Vercel construirá la web (Building) y generará una versión optimizada para producción.
3. En un par de minutos, la web estará actualizada en tu dominio público sin que tengas que tocar ningún servidor ni ejecutar ningún comando de consola adicional.

Puedes ver el estado del despliegue en tiempo real entrando en tu panel de control (Dashboard) en [vercel.com](https://vercel.com).

---

## 📸 4. Gestión de Productos (Admin) y Subida de Imágenes

Se ha habilitado una ruta de administración (`/admin`) para subir productos nuevos de forma visual e intuitiva sin necesidad de editar código.

### En Local (Tu PC)
La subida de archivos está configurada para guardar las imágenes directamente en la carpeta `public/uploads/` de tu proyecto y actualizar el archivo local `src/data/products.json`.
- **Funcionamiento**: Es inmediato y perfecto para probar, desarrollar o añadir productos desde tu ordenador de casa.
- **Importante**: Los productos o fotos que subas localmente **no se suben automáticamente a la nube**. Debes hacer el proceso de `git add .`, `git commit` y `git push` (Paso 2) para que esos productos nuevos suban al repositorio y luego a Vercel.

### En Producción (Vercel)
El guardado directo de imágenes o archivos en carpetas locales **NO FUNCIONA** en Vercel. Vercel es un entorno "Serverless" (sin servidor fijo), lo que significa que su sistema de archivos es efímero (de solo lectura). Cualquier archivo que la web intente guardar en disco mientras está en producción será destruido instantáneamente.

**Siguientes pasos para escalar la web:**
Para que el panel de administración funcione en la web pública (y puedas subir productos desde el móvil mientras estás por la calle):
1. **Base de Datos**: Sustituir el archivo local `products.json` por una base de datos en la nube gratuita ofrecida por la misma plataforma, como **Vercel Postgres**.
2. **Storage para Fotos**: Configurar **Vercel Blob** (o servicios externos como Cloudinary o AWS S3). La API que hemos creado (`/api/products`) se debe actualizar para subir las fotos directamente a Vercel Blob y guardar el enlace (URL) en la base de datos, en lugar de intentar escribirlas en el disco duro.
