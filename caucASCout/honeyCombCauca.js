// honeyCombCauca.js - Actualiza el panel lateral al hacer clic en un hexágono
document.addEventListener('DOMContentLoaded', () => {
    const hexagons = document.querySelectorAll('.hex');
    const infoTitle = document.getElementById('info-title');
    const infoContent = document.getElementById('info-content');
    let currentActive = null;

    hexagons.forEach(hex => {
        hex.addEventListener('click', () => {
            const titulo = hex.getAttribute('data-titulo');
            const edad = hex.getAttribute('data-edad');
            const imagen = hex.getAttribute('data-imagen');
            const url = hex.getAttribute('data-url');

            // Si el hexágono tiene título (rama), mostramos información en el panel
            if (titulo && edad && imagen) {
                infoTitle.textContent = `🐾 ${titulo}`;
                infoContent.innerHTML = `
                    <img src="${imagen}" alt="${titulo}" style="width: 100%; border-radius: 20px; margin-bottom: 1rem;">
                    <p><strong>🎂 Edad:</strong> ${edad}</p>
                    <button id="btn-mas-info" class="btn-demo" style="margin-top: 0.5rem;">Ir a la página →</button>
                `;
                const btn = document.getElementById('btn-mas-info');
                btn.onclick = () => { if (url) window.location.href = url; };
            } else {
                // Hexágono central o sin datos: mostramos mensaje genérico
                infoTitle.textContent = '✨ Scouts Cauca';
                infoContent.innerHTML = '<p>Haz clic en una rama para conocer más sobre cada unidad educativa.</p>';
            }

            // Resaltado visual del hexágono activo (opcional, pero queda profesional)
            if (currentActive) currentActive.classList.remove('active');
            hex.classList.add('active');
            currentActive = hex;
        });
    });
});