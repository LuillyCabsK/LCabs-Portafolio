// scouts-cauca.js - Interactividad del honeycomb giratorio para Scouts Cauca
// Basado en honeyComb.js, adaptado para mostrar información de ramas en un panel lateral

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los hexágonos (incluye central y exteriores)
    const hexagons = document.querySelectorAll('.hex');
    // Elementos del panel de información
    const infoTitle = document.getElementById('info-title');
    const infoDesc = document.getElementById('info-desc');
    const infoLink = document.getElementById('info-link');
    
    let currentActive = null;

    // Función para actualizar el panel con los datos de la rama
    function updatePanel(title, description, url) {
        if (infoTitle) infoTitle.textContent = title;
        if (infoDesc) infoDesc.textContent = description;
        if (infoLink) {
            if (url && url !== '#') {
                infoLink.href = url;
                infoLink.style.display = 'inline-block';
            } else {
                infoLink.style.display = 'none';
            }
        }
    }

    // Recorremos todos los hexágonos
    hexagons.forEach(hex => {
        hex.addEventListener('click', () => {
            // Obtenemos la información del hexágono a través de atributos data-*
            const title = hex.getAttribute('data-titulo') || 'Scouts Cauca';
            const description = hex.getAttribute('data-desc') || 'Haz clic en una rama para conocer más sobre nuestras unidades educativas.';
            const url = hex.getAttribute('data-url') || '';

            // Actualizamos el panel con la información de la rama
            updatePanel(title, description, url);

            // Manejo de resaltado visual (clase active)
            if (currentActive === hex) return;
            if (currentActive) currentActive.classList.remove('active');
            hex.classList.add('active');
            currentActive = hex;

            // Efecto de opacidad para resaltar el hexágono activo (opcional)
            hexagons.forEach(h => {
                if (h === hex) {
                    h.style.opacity = '1';
                } else {
                    h.style.opacity = '0.85';
                }
            });
        });
    });
});