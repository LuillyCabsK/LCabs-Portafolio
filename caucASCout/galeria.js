// carrusel.js - Carrusel automático para Scouts Cauca
document.addEventListener('DOMContentLoaded', function() {
    // Lista de imágenes (actualiza con tus rutas)
    const imagenes = [
        {
            src: '/caucASCout/assets/eventos/Evento RIO 2026 en Popayán.png',
            alt: 'Rio 2026',
            pie: '🏕️ Campamento regional - Sierra Caucana'
        },
        {
            src: '/caucASCout/assets/eventos/WhatsApp Image 2026-04-28 at 6.28.32 PM.jpeg',
            alt: 'Reunión Interregional de Oficiales',
            pie: '🤝 Reunión Interregional de Oficiales (RIO)'
        }
        // Puedes agregar más imágenes aquí
    ];

    // Elementos del DOM
    const imgElement = document.getElementById('carrusel-imagen');
    const pieElement = document.getElementById('carrusel-pie');
    const indicadoresContainer = document.getElementById('carrusel-indicadores');
    const btnPrev = document.getElementById('carrusel-prev');
    const btnNext = document.getElementById('carrusel-next');

    let indiceActual = 0;
    let intervalo;

    // Crear indicadores (puntos)
    imagenes.forEach((_, index) => {
        const punto = document.createElement('span');
        punto.classList.add('carrusel-indicador');
        if (index === 0) punto.classList.add('activo');
        punto.dataset.index = index;
        punto.addEventListener('click', function() {
            irAImagen(parseInt(this.dataset.index));
            reiniciarIntervalo();
        });
        indicadoresContainer.appendChild(punto);
    });

    // Función para ir a una imagen específica
    function irAImagen(index) {
        if (index < 0 || index >= imagenes.length) return;
        indiceActual = index;
        const img = imagenes[index];
        // Efecto fade
        imgElement.style.opacity = '0.5';
        setTimeout(() => {
            imgElement.src = img.src;
            imgElement.alt = img.alt;
            pieElement.textContent = img.pie;
            imgElement.style.opacity = '1';
        }, 200);
        // Actualizar indicadores
        document.querySelectorAll('.carrusel-indicador').forEach((el, i) => {
            el.classList.toggle('activo', i === index);
        });
    }

    // Función para ir a la siguiente imagen
    function siguienteImagen() {
        const siguiente = (indiceActual + 1) % imagenes.length;
        irAImagen(siguiente);
    }

    // Función para ir a la imagen anterior
    function anteriorImagen() {
        const anterior = (indiceActual - 1 + imagenes.length) % imagenes.length;
        irAImagen(anterior);
    }

    // Función para reiniciar el intervalo (al hacer clic manual)
    function reiniciarIntervalo() {
        clearInterval(intervalo);
        intervalo = setInterval(siguienteImagen, 20000);
    }

    // Eventos de los botones
    btnPrev.addEventListener('click', function() {
        anteriorImagen();
        reiniciarIntervalo();
    });

    btnNext.addEventListener('click', function() {
        siguienteImagen();
        reiniciarIntervalo();
    });

    // Iniciar el carrusel
    irAImagen(0);
    intervalo = setInterval(siguienteImagen, 4000);

    // Pausar al pasar el mouse
    const contenedor = document.querySelector('.carrusel-contenedor');
    contenedor.addEventListener('mouseenter', () => {
        clearInterval(intervalo);
    });
    contenedor.addEventListener('mouseleave', () => {
        intervalo = setInterval(siguienteImagen, 4000);
    });
});