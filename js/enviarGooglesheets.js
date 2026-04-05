const scriptURL = 'https://script.google.com/macros/s/AKfycbyNx8mREFJ6ilD6Gdh5WuVuhQXKvcGCmtNlTZ5UDx0xgBGQuG-UJKVcsQRCWy5pivoXQA/exec'
const form = document.getElementById('diag-form');
const btn = document.getElementById('submit-btn');
const mensaje = document.getElementById('mensaje-exito');

form.addEventListener('submit', async (e) => { // Agregamos async aquí
    e.preventDefault();
    
    btn.disabled = true;
    btn.innerText = 'Enviando...';

    // 1. Crear el objeto FormData con los datos del formulario
    const formData = new FormData(form);

    try {
        // 2. Consultar la ubicación por IP (Gratis vía ipapi.co)
        const responseIp = await fetch('https://ipapi.co/json/');
        const dataIp = await responseIp.json();
        
        // 3. Añadir el país al envío (si falla la API, enviamos "Desconocido")
        formData.append('pais', dataIp.country_name || 'Desconocido');
        
    } catch (error) {
        console.error('No se pudo obtener la IP', error);
        formData.append('pais', 'Error al obtener');
    }

    // 4. Enviar todo a tu destino (Google Sheets o n8n)
    fetch(scriptURL, { 
        method: 'POST', 
        body: formData,
        mode: 'no-cors' 
    })
    .then(() => {
        form.reset();
        form.style.display = 'none';
        mensaje.style.display = 'block';
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert('Hubo un error al enviar.');
        btn.disabled = false;
        btn.innerText = 'Quiero mi diagnóstico GRATIS';
    });
});