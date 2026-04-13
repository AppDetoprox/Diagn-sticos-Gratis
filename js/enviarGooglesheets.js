
const scriptURL = 'https://script.google.com/macros/s/AKfycbwUfTgl85ykXDeCKY8OKjuqFeZuCs78KmHx0v96HkMXf2cXMqLQcRjRO7gcKbIhM0r-/exec';
const form = document.getElementById('diag-form');
const btn = document.getElementById('submit-btn');
const mensaje = document.getElementById('mensaje-exito');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Bloqueo de UI para evitar múltiples clics
    btn.disabled = true;
    const originalBtnText = btn.innerText;
    btn.innerText = 'Enviando...';

    const formData = new FormData(form);

    // 1. Agregar Fecha y Hora local
    const ahora = new Date();
    formData.append('fecha_hora', ahora.toLocaleString('es-ES', {
        dateStyle: 'short',
        timeStyle: 'medium'
    }));

    try {
        // 2. Obtener País con Timeout (Evita que el formulario se quede "colgado" si la API de IP falla)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 segundos máximo

        const responseIp = await fetch('https://ipapi.co/json/', { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (responseIp.ok) {
            const dataIp = await responseIp.json();
            formData.append('pais', dataIp.country_name || 'Desconocido');
        } else {
            formData.append('pais', 'No detectado');
        }
    } catch (error) {
        console.warn('Error al obtener IP o Timeout alcanzado:', error.message);
        formData.append('pais', 'Error/Timeout');
    }

    // 3. Enviar a Google Sheets con manejo de errores real
    try {
        const response = await fetch(scriptURL, { 
            method: 'POST', 
            body: formData,
            mode: 'no-cors' // Google Apps Script requiere no-cors para evitar errores de origen
        });

        // En modo 'no-cors' no podemos leer la respuesta, pero si no hay excepción, asumimos éxito
        form.reset();
        form.style.display = 'none';
        mensaje.style.display = 'block';
        console.log('Envío completado con éxito');

    } catch (error) {
        console.error('Error crítico en el envío:', error);
        alert('Lo sentimos, hubo un problema técnico. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.');
        btn.disabled = false;
        btn.innerText = originalBtnText;
    }
});
