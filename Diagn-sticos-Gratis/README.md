# 🚀 Diagnóstico Web Gratis

Landing page de alta conversión diseñada para captar leads interesados en optimizar sus sitios web. El sistema ofrece un diagnóstico gratuito mediante un video personalizado, automatizando la recolección de datos clave directamente en Google Sheets.

## 📋 Características Principales

* **Contadores Dinámicos:** Implementación de una sección de estadísticas que cuenta de forma animada hasta alcanzar objetivos específicos de diagnósticos y satisfacción.
* **Captura de Leads:** Formulario integrado que recopila Nombre, Sitio Web, WhatsApp y el problema específico del cliente.
* **Enriquecimiento de Datos:** El sistema detecta automáticamente el país del usuario mediante su dirección IP antes de enviar la información.
* **Diseño Profesional:** Interfaz en modo oscuro (Dark Mode) con tarjetas interactivas que incluyen efectos de elevación al pasar el mouse (hover).
* **Confirmación Inmediata:** Tras el envío exitoso, el formulario se oculta para mostrar un mensaje de éxito dinámico.

---

## 🛠️ Stack Tecnológico

* **Frontend:** HTML5 semántico y CSS3 personalizado.
* **Lógica:** JavaScript (ES6+) para animaciones y manejo de peticiones asíncronas (`fetch`).
* **Integración:** Google Apps Script para la recepción de datos vía POST.
* **API Externa:** `ipapi.co` para geolocalización básica.

---

## 📂 Estructura de Archivos

* `preview.html`: Estructura principal de la landing page.
* `css/style.css`: Estilos base, tipografía y layout general.
* `css/box.css`: Estilos específicos de las tarjetas (boxes) y decoraciones con iconos.
* `js/script.js`: Control de los contadores numéricos animados.
* `js/enviarGooglesheets.js`: Manejo del formulario, detección de IP y conexión con Google.

---

## 🚀 Configuración

1.  **URL de Google Script:** Abre `js/enviarGooglesheets.js` y reemplaza la constante `scriptURL` con la URL de tu implementación de Google Apps Script.
2.  **Servidor Local:** El proyecto está configurado para funcionar por defecto en el puerto `5501` si utilizas la extensión *Live Server* de VS Code.
3.  **Personalización:** Puedes ajustar los objetivos de los contadores cambiando el atributo `data-target` en las etiquetas `<span>` del archivo `preview.html`.

---

**Desarrollado por [AppDetoprox](https://github.com/AppDetoprox/Diagn-sticos-Gratis)** 🚀
