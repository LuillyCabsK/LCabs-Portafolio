document.addEventListener('DOMContentLoaded', () => {
    const hexagons = document.querySelectorAll('.hex');
    const infoTitle = document.getElementById('info-title');
    const infoDesc = document.getElementById('info-desc');
    const infoLink = document.getElementById('info-link');
    let currentActive = null;

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

    hexagons.forEach(hex => {
        hex.addEventListener('click', () => {
            const title = hex.getAttribute('data-titulo') || 'Proyecto';
            const description = hex.getAttribute('data-info') || 'Proyecto en desarrollo.';
            const url = hex.getAttribute('data-url') || '';
            
            updatePanel(title, description, url);

            if (currentActive === hex) return;
            
            if (currentActive) currentActive.classList.remove('active');
            hex.classList.add('active');
            currentActive = hex;

            // Opacidad fluida para aislar visualmente el proyecto activo
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