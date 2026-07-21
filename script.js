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