// Función que calcula la edad basada en año, mes y día de nacimiento
function calcularEdad(year, month, day) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthActual = today.getMonth();
    const dayActual = today.getDate();
    const monthBirth = birthDate.getMonth();
    const dayBirth = birthDate.getDate();

    if (monthActual < monthBirth || (monthActual === monthBirth && dayActual < dayBirth)) {
        age--;
    }
    return age;
}

// Calcular la edad con tu fecha de nacimiento (19 de enero de 1992)
const miEdad = calcularEdad(1992, 1, 19);

// Esperar a que el DOM esté completamente cargado antes de modificar el HTML
document.addEventListener('DOMContentLoaded', function() {
    const edadSpan = document.getElementById('age');
    if (edadSpan) {
        edadSpan.textContent = miEdad;
    }
});