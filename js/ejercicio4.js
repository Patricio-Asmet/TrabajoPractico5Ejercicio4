function actualizarReloj() {
    const ahora = new Date();

    const optionsFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formatoFecha = new Intl.DateTimeFormat('es-ES', optionsFecha);
    let fecha = formatoFecha.format(ahora).replace(/,\s*$/, '');
    fecha = fecha.charAt(0).toUpperCase() + fecha.slice(1);

    const optionsHora = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formatoHora = new Intl.DateTimeFormat('es-ES', optionsHora);
    const hora = formatoHora.format(ahora);

    const ampm = ahora.getHours() >= 12 ? 'pm' : 'am';

    document.getElementById('fecha-container').textContent = fecha;
    document.getElementById('hora-container').textContent = hora;
    document.getElementById('ampm').textContent = ampm;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();


