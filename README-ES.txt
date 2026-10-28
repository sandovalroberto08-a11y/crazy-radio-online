CRAZY RADIO ONLINE — ARCHIVOS INICIALES
======================================

Incluye:
- index.html: interfaz móvil con colores negro/amarillo, botón de reproducción,
  control de volumen, enlace de escucha y WhatsApp.
- manifest.webmanifest: datos para instalar como app web.
- sw.js: caché básica de los archivos de la interfaz.
- icon.svg: icono original sencillo de Crazy Radio.

IMPORTANTE SOBRE EL STREAMING
-----------------------------
La dirección facilitada http://crazyradio.radio12345.com/ parece ser la página
de escucha de Listen2MyRadio, no necesariamente el enlace de audio directo.
Por eso el botón de reproducción integrado muestra una explicación en vez de
fingir que reproduce audio.

En el panel de Listen2MyRadio busca "Stream details", "All Stream Links",
"tunein", "stream URL" o un enlace de audio directo MP3/AAC. Si tu plan gratuito
no permite incrustar el stream en una app/web externa, tendrás que usar el
enlace oficial de escucha o consultar al proveedor sobre un enlace integrable.
No publiques contraseñas del panel ni claves de emisión.

PROBAR EN TU ORDENADOR
----------------------
1. Descomprime el ZIP.
2. Abre una terminal en la carpeta.
3. Si tienes Python 3, ejecuta:
   python -m http.server 8000
4. Abre http://localhost:8000 en tu navegador.

Para probar la instalación PWA en un móvil, la app debe estar alojada en HTTPS
(o en localhost para pruebas). Abrir index.html directamente como archivo no
permite todas las funciones de instalación/caché.

PUBLICAR GRATIS COMO WEB APP INSTALABLE
---------------------------------------
Opción sencilla: GitHub Pages.
1. Crea una cuenta en https://github.com/ si no tienes.
2. Crea un repositorio público, por ejemplo crazy-radio-online.
3. Sube los archivos de esta carpeta a la raíz del repositorio.
4. En Settings > Pages, activa la publicación desde la rama principal (main)
   y la carpeta raíz (/(root)).
5. Espera a que GitHub Pages muestre la URL HTTPS publicada.
6. Abre esa URL en Android Chrome y usa el menú "Instalar app" o "Añadir a
   pantalla de inicio". En iPhone, abre la URL en Safari > Compartir >
   Añadir a pantalla de inicio.

El servicio de alojamiento puede cambiar sus condiciones; revisa las condiciones
vigentes del proveedor antes de publicar.

ANDROID Y IPHONE COMO APPS NATIVAS
----------------------------------
Estos archivos son una PWA; no son todavía un APK Android ni una app firmada
para App Store. Para generar aplicaciones nativas puedes usar Capacitor:
https://capacitorjs.com/docs/getting-started

Necesitarás Node.js; para Android, Android Studio y SDK; para iOS, un Mac con
Xcode para compilar localmente. La publicación en las tiendas puede implicar
cuotas de desarrollador, por lo que no se garantiza que sea gratuita.

PERSONALIZAR EL STREAM
----------------------
En index.html busca:
const STREAM_URL = "";
Cuando tengas el enlace DIRECTO de audio compatible, colócalo entre comillas.
Ejemplo ilustrativo (NO es tu URL real):
const STREAM_URL = "https://servidor.ejemplo/stream.mp3";

No uses como STREAM_URL una página HTML de escucha. Comprueba que el enlace
funcione en el navegador móvil, que permita reproducción externa y que HTTPS no
bloquee contenido HTTP mixto.

CONTACTO
--------
WhatsApp: https://wa.me/34640845500
Lema: Transmitiendo emociones
