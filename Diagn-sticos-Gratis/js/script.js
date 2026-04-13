const counters = document.querySelectorAll('.counter');
const speed = 200; // A menor número, más rápido el conteo

counters.forEach(counter => {
    const updateCount = () => {
        // Obtenemos el número final deseado
        const target = +counter.getAttribute('data-target');
        // Obtenemos el número actual en pantalla
        const count = +counter.innerText;

        // Calculamos el incremento
        const inc = target / speed;

        if (count < target) {
            // Añadimos el incremento y redondeamos hacia arriba
            counter.innerText = Math.ceil(count + inc);
            // Llamamos a la función de nuevo tras un breve retraso
            setTimeout(updateCount, 25);
        } else {
            // Si nos pasamos, forzamos el número exacto del target
            counter.innerText = target;
        }
    };

    updateCount();
});