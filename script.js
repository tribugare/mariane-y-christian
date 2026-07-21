// 1. La fecha exacta de la boda
const fechaBoda = new Date("2026-09-18T16:00:00-07:00");

// 2. Función que calcula y actualiza el countdown
function actualizarCountdown() {

  const ahora = new Date();
  const diferencia = fechaBoda - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

// 3. Correr la función cada segundo
setInterval(actualizarCountdown, 1000);

// Menú hamburguesa
const botonMenu = document.getElementById("boton-menu");
const listaNav = document.getElementById("lista-nav");

botonMenu.addEventListener("click", function() {
  listaNav.classList.toggle("abierto");
});

// RSVP por WhatsApp
const formRSVP = document.getElementById("form-rsvp");

formRSVP.addEventListener("submit", function(evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre-invitado").value;
  const numeroMariane = "526644797002";
  const mensaje = `Hola, soy ${nombre} y confirmo mi asistencia a la boda de Mariane y Christian 🎉`;
  const mensajeCodificado = encodeURIComponent(mensaje);

  window.open(`https://wa.me/${numeroMariane}?text=${mensajeCodificado}`, "_blank");

  formRSVP.innerHTML = `
    <p class="mensaje-gracias">¡Gracias, ${nombre}! Te hemos abierto WhatsApp para confirmar tu asistencia.</p>
  `;
});