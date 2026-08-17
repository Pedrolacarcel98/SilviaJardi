# Guía del Proyecto: Desarrollo Local y Despliegue en Servidor

Esta guía te explicará cómo trabajar en el proyecto desde tu ordenador (local), cómo guardar los cambios, y cómo hacer que esos cambios se reflejen en tu máquina virtual (Google VM) para que el comportamiento sea idéntico.

---

## 💻 1. Desarrollo en Local (Tu Ordenador)

Para trabajar cómodamente en tu ordenador con recarga automática (hot-reload), lo mejor es usar Node.js directamente. 

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

Una vez hayas terminado de programar y estés contento con cómo se ve en tu ordenador, debes subir esos cambios a la "nube" (GitHub/GitLab) para que el servidor pueda descargarlos.

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

## 🌍 3. Reflejar los cambios en el Servidor (Google VM)

Ahora que tu código está en el repositorio, solo falta decirle a la máquina virtual que lo descargue y actualice la web en producción.

Gracias a que configuramos **Docker** en el servidor, no importa qué versión de Node tengas allí, funcionará exactamente igual que en local.

### Si es la primera vez que configuras la VM:
```bash
# Instalar Docker y Git (Ubuntu/Debian)
sudo apt update && sudo apt install -y git docker.io docker-compose
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
newgrp docker

# Clonar el proyecto
git clone <URL_DE_TU_REPOSITORIO>
cd SilviaJardi/web
```

### Para actualizar la web (Tu flujo de trabajo habitual):
Entra a la terminal de tu Google VM, navega a la carpeta del proyecto y ejecuta estos dos comandos:

```bash
# 1. Descargar los últimos cambios que subiste desde tu ordenador local
git pull

# 2. Reconstruir la web y reiniciar el servidor sin cortes (cero downtime)
docker-compose up -d --build
```

¡Y ya está! La aplicación compilará la versión optimizada de Next.js y se actualizará de forma invisible para los usuarios. Tu web estará corriendo en la IP pública de tu VM en el puerto `3000`.

### Comandos útiles en el servidor (Docker):
- **Ver los logs de la web en vivo:** `docker-compose logs -f`
- **Detener la aplicación:** `docker-compose stop`
- **Volver a iniciarla:** `docker-compose start`
- **Apagar y eliminar el contenedor:** `docker-compose down`

*(Nota: Asegúrate de que en el Firewall de Google Cloud tengas abierto el puerto TCP 3000 para poder acceder a la web, o el puerto 80 si luego añades un proxy como Nginx).*
