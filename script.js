function verificarPassword() {
  const claveCorrecta = "200628"; // 🔑 Aquí defines tu contraseña
  const input = document.getElementById("password").value;
  const mensaje = document.getElementById("mensaje");

  if (input === claveCorrecta) {
    document.getElementById("login").style.display = "none";
    document.getElementById("contenido").style.display = "block";
  } else {
    mensaje.textContent = "❌ Contraseña incorrecta. Intenta de nuevo.";
  }
}
