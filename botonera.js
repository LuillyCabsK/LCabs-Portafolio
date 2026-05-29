// JavaScript para funcionalidades interactivas

document.addEventListener('DOMContentLoaded', () => {
    // Asignar enlaces a botones
    const links = {
        github: "https://github.com/LuillyCabsK",
        instagram: "https://www.instagram.com/mr.l_cabs/",
        linkedin: "https://www.linkedin.com/in/luilly-cabrera/"
    };

    Object.keys(links).forEach(id => {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', () => {
                window.open(links[id], '_blank');
            });
        }
    });

    console.log("Botones funcionales cargados correctamente.");
});
