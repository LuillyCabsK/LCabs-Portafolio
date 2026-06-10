// i18n.js - Traducciones + ventana modal + botón de reset
const translations = {
    es: {
        // Header
        "nav.home": "Inicio",
        "nav.skills": "Habilidades",
        "nav.hobbies": "Pasatiempos",
        "nav.formacion": "Formación",
        "nav.proyectos": "Proyectos",
        "nav.experiencia": "Experiencia",
        "header.nombre": "🍴 Luilly Cabs | Full Stack & Data",
        // Index
        "index.title": "Sergio Luilly Cabrera Dorado - Portafolio comercial",
        "index.titulo": "Sergio Luilly Cabrera Dorado",
        "index.presentacion": "Soy un hombre colombiano de <span id='age'></span> años, miembro de la hermandad scout desde los 11 años. Experto en formulación de proyectos, apicultura y dirección de equipos. Conocimientos en programación, agroindustrias, preparación y conservación de alimentos.",
        "index.biografia_titulo": "Mi Biografía",
        "index.biografia_texto": "Luilly Cabrera es un profesional con una amplia experiencia en el desarrollo de software, especialmente en el área de front-end con un enfoque en inteligencia artificial. Ha cursado 8 semestres de ingeniería agroindustrial y ha participado en seminarios de emprendimiento, lo que le ha permitido expandir sus conocimientos en áreas como Excel, Word y electricidad básica. Además, Luilly tiene un amplio dominio en diversas disciplinas culinarias, con especialización en cocina colombiana, mediterránea, italiana, argentina, parrilla y comidas rápidas, así como en la preparación de bebidas espirituosas. Es un apasionado del mundo scout, donde ha recibido formación en insignia de madera especializada en tropa. Con una filosofía que combina la tecnología, la creatividad en la cocina y el compromiso social, Luilly Cabrera continúa desarrollándose profesionalmente mientras comparte sus pasiones con los demás.",
        "index.skills_title": "Habilidades",
        "index.hobbies_title": "Pasatiempos",
        "index.experiencia_title": "Experiencia",
        "index.academics_title": "Formación Académica",
        "index.ver_mas": "Ver más →",
        "academic.cocina": "Cocina Colombiana",
        "academic.bd": "Análisis de Bases de datos",
        "academic.frontend": "Formación front-end",
        "hobby.moto": "Rodar en motocicleta",
        "hobby.leer": "Leer novelas fantásticas",
        "hobby.scout": "Escultismo",
        "hobby.pesca": "Pesca",
        // Footer
        "footer.text": "Este portafolio lo construí paso a paso, aprendiendo cada línea. Recibí mentoría y orientación de ‘La Ballena’ 🐋, un desarrollador con años de experiencia que me guió en la arquitectura, buenas prácticas y debugging. Todo el código fue escrito por mí, entendiendo cada decisión.",
        // Skills page
        "skills.title": "Luilly Cabs - Habilidades",
        "skills.technical": "💻 Habilidades Técnicas",
        "skills.professional": "👔 Habilidades Profesionales",
        "skills.soft": "🧠 Habilidades Blandas",
        "skills.others": "📦 Otras Habilidades",
        "skills.unique": "🌟 Habilidades Únicas",
        "skills.languages": "🌐 Idiomas",
        // Formación page
        "formacion.title": "Luilly Cabs - Formación Académica",
        "formacion.titulo_principal": "Formación Académica Profesional",
        "formacion.cursos_titulo": "Cursos",
        "formacion.byu.titulo": "Software Development",
        "formacion.byu.institucion": "BYU Pathway Worldwide",
        "formacion.byu.fecha": "2024 - Presente",
        "formacion.byu.descripcion": "Desarrollo de software full stack, estructuras de datos, bases de datos SQL, programación orientada a objetos, y fundamentos de ingeniería de software. Proyectos prácticos en equipo y metodologías ágiles.",
        "formacion.alura.titulo": "Front-End Development Certificate",
        "formacion.alura.institucion": "Alura Latam",
        "formacion.alura.fecha": "2024 - 2025",
        "formacion.alura.descripcion": "HTML5, CSS3, JavaScript (ES6+), React, diseño responsivo, Flexbox, Grid, consumo de APIs REST, y buenas prácticas de accesibilidad y rendimiento.",
        "formacion.agro.titulo": "Ingeniería Agroindustrial",
        "formacion.agro.institucion": "Universidad del Cauca, Popayán",
        "formacion.agro.fecha": "8° semestre (en curso)",
        "formacion.agro.descripcion": "Formulación y evaluación de proyectos, gestión de calidad, procesamiento de alimentos, conservación y empaque, ingeniería económica, investigación operativa.",
        "formacion.python.titulo": "Análisis exploratorio con PYTHON",
        "formacion.python.institucion": "SENA",
        "formacion.python.fecha": "Certificación",
        "formacion.python.descripcion": "Lógica de programación, estructuras de control, funciones, manejo de archivos, y resolución de problemas algorítmicos con Python.",
        "formacion.powerbi.titulo": "Visualización de datos usando POWER BI",
        "formacion.powerbi.institucion": "SENA",
        "formacion.powerbi.fecha": "Certificación",
        "formacion.powerbi.descripcion": "Transformación de datos, modelado, creación de dashboards interactivos, DAX básico, e integración con Excel y bases de datos.",
        // Experiencia page
        "experiencia.titulo": "Experiencia Profesional",
        // Hobbies page
        "hobbies.title": "Luilly Cabs - Pasatiempos",
        "hobbies.titulo": "Mis Hobbies",
        "hobbies.desc": "Disfruto el aire libre, la lectura y el aprendizaje constante.",
        // Proyectos page
        "proyectos.panel_titulo": "✨ Proyecto destacado",
        "proyectos.panel_desc": "Haz clic en un hexágono para conocer más sobre cada proyecto.",
        "proyectos.ver_demo": "Ver demo →",
        "proyecto.juego_titulo": "🎮 Juego de Decisiones",
        "proyecto.juego_info": "Aventura textual con múltiples finales e interactividad. HTML, CSS, JS vanilla.",
        "proyecto.pokewiki_titulo": "⚡ PokéWiki",
        "proyecto.pokewiki_info": "Buscador de Pokémon con React y PokeAPI. Filtros, búsqueda y estadísticas.",
        "proyecto.scouts_titulo": "🏕️ Web Scouts Cauca",
        "proyecto.scouts_info": "Sitio informativo regional para la Asociación de Scouts. HTML, CSS, JS.",
        "proyecto.hotel_titulo": "🏨 App Hotel de mi abuela",
        "proyecto.hotel_info": "Sistema de reservas PWA con React y Firebase.",
        "proyecto.recetas_titulo": "🍲 Buscador de Recetas",
        "proyecto.recetas_info": "Explora recetas con TheMealDB. Filtros, categorías y modal.",
        "proyecto.proximo_titulo": "🚀 Próximo Proyecto",
        "proyecto.proximo_info": "Espacio reservado para una nueva aplicación.",
        "proyecto.notas_titulo": "📊 Calculadora de Notas",
        "proyecto.notas_info": "Calcula tu nota necesaria para aprobar. React y lógica personalizada."
    },
    en: {
        // Header
        "nav.home": "Home",
        "nav.skills": "Skills",
        "nav.hobbies": "Hobbies",
        "nav.formacion": "Education",
        "nav.proyectos": "Projects",
        "nav.experiencia": "Experience",
        "header.nombre": "🍴 Luilly Cabs | Full Stack & Data",
        // Index
        "index.title": "Sergio Luilly Cabrera Dorado - Commercial Portfolio",
        "index.titulo": "Sergio Luilly Cabrera Dorado",
        "index.presentacion": "I am a <span id='age'></span>-year-old Colombian man, member of the scout brotherhood since age 11. Expert in project formulation, beekeeping and team leadership. Knowledge in programming, agribusiness, food preparation and preservation.",
        "index.biografia_titulo": "My Biography",
        "index.biografia_texto": "Luilly Cabrera is a professional with extensive experience in software development, especially in front-end with a focus on artificial intelligence. He has completed 8 semesters of Agricultural Engineering and has participated in entrepreneurship seminars, which has allowed him to expand his knowledge in areas such as Excel, Word and basic electricity. Additionally, Luilly has a broad mastery of various culinary disciplines, specializing in Colombian, Mediterranean, Italian, Argentine, grilled and fast food, as well as the preparation of spirits. He is passionate about the scouting world, where he has received specialized wood badge training in troops. With a philosophy that combines technology, culinary creativity and social commitment, Luilly Cabrera continues to develop professionally while sharing his passions with others.",
        "index.skills_title": "Skills",
        "index.hobbies_title": "Hobbies",
        "index.experiencia_title": "Experience",
        "index.academics_title": "Academic Education",
        "index.ver_mas": "See more →",
        "academic.cocina": "Colombian Cuisine",
        "academic.bd": "Database Analysis",
        "academic.frontend": "Front-end Training",
        "hobby.moto": "Riding motorcycle",
        "hobby.leer": "Reading fantasy novels",
        "hobby.scout": "Scouting",
        "hobby.pesca": "Fishing",
        // Footer
        "footer.text": "This portfolio was built step by step, learning each line. I received mentorship and guidance from ‘La Ballena’ 🐋, an experienced developer who guided me in architecture, best practices and debugging. All the code was written by me, understanding every decision.",
        // Skills
        "skills.title": "Luilly Cabs - Skills",
        "skills.technical": "💻 Technical Skills",
        "skills.professional": "👔 Professional Skills",
        "skills.soft": "🧠 Soft Skills",
        "skills.others": "📦 Other Skills",
        "skills.unique": "🌟 Unique Skills",
        "skills.languages": "🌐 Languages",
        // Formación page (ENGLISH)
        "formacion.title": "Luilly Cabs - Academic Education",
        "formacion.titulo_principal": "Professional Academic Education",
        "formacion.cursos_titulo": "Courses",
        "formacion.byu.titulo": "Software Development",
        "formacion.byu.institucion": "BYU Pathway Worldwide",
        "formacion.byu.fecha": "2024 - Present",
        "formacion.byu.descripcion": "Full stack software development, data structures, SQL databases, object-oriented programming, and software engineering fundamentals. Team projects and agile methodologies.",
        "formacion.alura.titulo": "Front-End Development Certificate",
        "formacion.alura.institucion": "Alura Latam",
        "formacion.alura.fecha": "2024 - 2025",
        "formacion.alura.descripcion": "HTML5, CSS3, JavaScript (ES6+), React, responsive design, Flexbox, Grid, REST API consumption, and accessibility and performance best practices.",
        "formacion.agro.titulo": "Agroindustrial Engineering",
        "formacion.agro.institucion": "Universidad del Cauca, Popayán",
        "formacion.agro.fecha": "8th semester (in progress)",
        "formacion.agro.descripcion": "Project formulation and evaluation, quality management, food processing, preservation and packaging, economic engineering, operations research.",
        "formacion.python.titulo": "Exploratory analysis with PYTHON",
        "formacion.python.institucion": "SENA",
        "formacion.python.fecha": "Certification",
        "formacion.python.descripcion": "Programming logic, control structures, functions, file handling, and algorithmic problem solving with Python.",
        "formacion.powerbi.titulo": "Data visualization using POWER BI",
        "formacion.powerbi.institucion": "SENA",
        "formacion.powerbi.fecha": "Certification",
        "formacion.powerbi.descripcion": "Data transformation, modeling, interactive dashboard creation, basic DAX, and integration with Excel and databases.",
        // Experiencia
        "experiencia.titulo": "Professional Experience",
        // Hobbies
        "hobbies.title": "Luilly Cabs - Hobbies",
        "hobbies.titulo": "My Hobbies",
        "hobbies.desc": "I enjoy the outdoors, reading and continuous learning.",
        // Proyectos
        "proyectos.panel_titulo": "✨ Featured Project",
        "proyectos.panel_desc": "Click on a hexagon to learn more about each project.",
        "proyectos.ver_demo": "View demo →",
        "proyecto.juego_titulo": "🎮 Decision Game",
        "proyecto.juego_info": "Text-based adventure with multiple endings. HTML, CSS, vanilla JS.",
        "proyecto.pokewiki_titulo": "⚡ PokéWiki",
        "proyecto.pokewiki_info": "Pokémon search engine using React and PokeAPI. Filters, search and stats.",
        "proyecto.scouts_titulo": "🏕️ Scouts Cauca Web",
        "proyecto.scouts_info": "Informational site for the Scouts Association. HTML, CSS, JS.",
        "proyecto.hotel_titulo": "🏨 Grandma's Hotel App",
        "proyecto.hotel_info": "PWA reservation system with React and Firebase.",
        "proyecto.recetas_titulo": "🍲 Recipe Finder",
        "proyecto.recetas_info": "Explore recipes with TheMealDB. Filters, categories and modal.",
        "proyecto.proximo_titulo": "🚀 Next Project",
        "proyecto.proximo_info": "Space reserved for a new amazing application.",
        "proyecto.notas_titulo": "📊 Grade Calculator",
        "proyecto.notas_info": "Calculate the grade you need to pass. React and custom logic."
    }
};

function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.innerHTML && (el.innerHTML.includes('<span') || el.innerHTML.includes('<i'))) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    document.querySelectorAll('.hex').forEach(hex => {
        const tituloKey = hex.getAttribute('data-titulo-key');
        const infoKey = hex.getAttribute('data-info-key');
        if (tituloKey && translations[lang][tituloKey]) hex.setAttribute('data-titulo', translations[lang][tituloKey]);
        if (infoKey && translations[lang][infoKey]) hex.setAttribute('data-info', translations[lang][infoKey]);
    });
}

function showLanguageModal() {
    const modal = document.createElement('div');
    modal.id = 'lang-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '9999';
    modal.style.backdropFilter = 'blur(5px)';
    const box = document.createElement('div');
    box.style.backgroundColor = 'var(--hueso, #f5f0e1)';
    box.style.padding = '2rem';
    box.style.borderRadius = '24px';
    box.style.textAlign = 'center';
    box.style.boxShadow = '0 20px 35px rgba(0,0,0,0.3)';
    box.style.maxWidth = '300px';
    box.style.width = '80%';
    const title = document.createElement('h2');
    title.textContent = '🌐 Selecciona tu idioma';
    title.style.color = 'var(--azul-rey, #1e3a8a)';
    title.style.marginBottom = '1rem';
    const sub = document.createElement('p');
    sub.textContent = 'Choose your language';
    sub.style.marginBottom = '1.5rem';
    sub.style.color = '#444';
    const btnEs = document.createElement('button');
    btnEs.textContent = 'Español';
    btnEs.style.backgroundColor = 'var(--verde, #2a7f49)';
    btnEs.style.color = 'white';
    btnEs.style.border = 'none';
    btnEs.style.padding = '0.6rem 1.2rem';
    btnEs.style.borderRadius = '40px';
    btnEs.style.margin = '0 0.5rem';
    btnEs.style.cursor = 'pointer';
    btnEs.style.fontSize = '1rem';
    btnEs.onclick = () => { setLanguage('es'); document.body.removeChild(modal); location.reload(); };
    const btnEn = document.createElement('button');
    btnEn.textContent = 'English';
    btnEn.style.backgroundColor = 'var(--mostaza, #e6a017)';
    btnEn.style.color = '#2c2c2c';
    btnEn.style.border = 'none';
    btnEn.style.padding = '0.6rem 1.2rem';
    btnEn.style.borderRadius = '40px';
    btnEn.style.margin = '0 0.5rem';
    btnEn.style.cursor = 'pointer';
    btnEn.style.fontSize = '1rem';
    btnEn.onclick = () => { setLanguage('en'); document.body.removeChild(modal); location.reload(); };
    box.appendChild(title);
    box.appendChild(sub);
    box.appendChild(btnEs);
    box.appendChild(btnEn);
    modal.appendChild(box);
    document.body.appendChild(modal);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (!savedLang) showLanguageModal();
    else setLanguage(savedLang);

    // Botón para restablecer idioma (si existe)
    const resetBtn = document.getElementById('reset-lang');
    if (resetBtn) {
        resetBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('preferredLanguage');
            location.reload();
        });
    }
});