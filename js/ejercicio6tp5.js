let temporizadorInterval;
  let tiempoRestante = 0;

  function iniciarTemporizador() {
    const tiempoInput = document.getElementById('tiempoInput');
    const tiempoIngresado = parseInt(tiempoInput.value, 10);

    if (isNaN(tiempoIngresado) || tiempoIngresado <= 0) {
      alert('Por favor, ingresa un tiempo válido en segundos.');
      return;
    }

    tiempoRestante = tiempoIngresado;
    actualizarTemporizador();

    temporizadorInterval = setInterval(() => {
      tiempoRestante--;
      if (tiempoRestante < 0) {
        pausarTemporizador();
        alert('¡Tiempo agotado!');
      } else {
        actualizarTemporizador();
      }
    }, 1000);

    // Cambiar el color de fondo al iniciar el temporizador
    document.body.style.backgroundColor = '#87CEEB';
  }

  function pausarTemporizador() {
    clearInterval(temporizadorInterval);
    // Cambiar el color de fondo al pausar el temporizador
    document.body.style.backgroundColor = '#FFD700';
  }

  function resetearTemporizador() {
    clearInterval(temporizadorInterval);
    tiempoRestante = 0;
    actualizarTemporizador();
    // Cambiar el color de fondo al resetear el temporizador
    document.body.style.backgroundColor = '#FFFFFF';
  }

  function actualizarTemporizador() {
    const temporizadorElemento = document.getElementById('temporizador');
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    temporizadorElemento.textContent = `${formatoDosDigitos(minutos)}:${formatoDosDigitos(segundos)}`;
  }

  function formatoDosDigitos(valor) {
    return valor.toString().padStart(2, '0');
  }