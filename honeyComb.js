// honeyComb.js - Interactividad del panal + Modal para ruN4U
document.addEventListener('DOMContentLoaded', () => {
    const hexagons = document.querySelectorAll('.hex:not(.spacer)');
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

    // Función para crear el modal con iframe y enlace
    function showProjectModal(githubUrl, replitDemoUrl, title) {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '10000';
        modal.style.backdropFilter = 'blur(5px)';
        
        modal.innerHTML = `
            <div style="background: var(--hueso, #f5f0e1); border-radius: 16px; padding: 1rem; max-width: 90%; max-height: 90%; display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h2 style="margin: 0; color: var(--azul-rey);">${title}</h2>
                    <button id="closeModalBtn" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
                </div>
                <div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 1rem;">
                    <iframe src="${replitDemoUrl}" style="width: 600px; height: 400px; border: none; border-radius: 8px;"></iframe>
                    <div style="flex: 1; min-width: 200px;">
                        <h3 style="color: var(--azul-rey);">Accede al código</h3>
                        <a href="${githubUrl}" target="_blank" style="display: inline-block; background: var(--verde); color: white; padding: 0.5rem 1rem; border-radius: 8px; text-decoration: none;">Ver en GitHub →</a>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.getElementById('closeModalBtn').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
    }

    hexagons.forEach(hex => {
        hex.addEventListener('click', () => {
            const title = hex.getAttribute('data-titulo') || 'Proyecto';
            const description = hex.getAttribute('data-info') || 'Proyecto en desarrollo.';
            const url = hex.getAttribute('data-url') || '';
            const githubUrl = hex.getAttribute('data-github');
            const replitDemoUrl = hex.getAttribute('data-url'); // La misma URL se usa para iframe

            // Si es el proyecto especial (tiene data-github), mostramos el modal
            if (githubUrl && replitDemoUrl) {
                showProjectModal(githubUrl, replitDemoUrl, title);
                // No actualizamos el panel para este proyecto especial
                return;
            }
            
            // Para el resto de proyectos, actualizamos el panel
            updatePanel(title, description, url);

            if (currentActive === hex) return;
            if (currentActive) currentActive.classList.remove('active');
            hex.classList.add('active');
            currentActive = hex;

            hexagons.forEach(h => {
                h.style.opacity = (h === hex) ? '1' : '0.85';
            });
        });
    });
});