function cambiarDimension() {
  const dimension = document.getElementById('dimension').value;
  const coord3D = document.querySelectorAll('.coord-3d');

  coord3D.forEach(input => {
    input.classList.toggle('hidden', dimension === "2");
  });

  document.getElementById('resultado').innerText = "";
}

function validarNumero(valor) {
  return !isNaN(valor) && valor > 0;
}

function calcularDistancia() {
  const dimension = document.getElementById('dimension').value;

  const xa = parseFloat(document.getElementById('xa').value);
  const ya = parseFloat(document.getElementById('ya').value);
  const xb = parseFloat(document.getElementById('xb').value);
  const yb = parseFloat(document.getElementById('yb').value);

  let mensaje = "";

  if (![xa, ya, xb, yb].every(validarNumero)) {
    mensaje = "Todos los valores deben ser mayores a cero y numéricos.";
    document.getElementById('resultado').innerHTML = `<span class="error">${mensaje}</span>`;
    return;
  }

  let distancia = 0;

  if (dimension === "2") {
    distancia = Math.sqrt(Math.pow(xb - xa, 2) + Math.pow(yb - ya, 2));
  } else {
    const za = parseFloat(document.getElementById('za').value);
    const zb = parseFloat(document.getElementById('zb').value);

    if (![za, zb].every(validarNumero)) {
      mensaje = "Todos los valores deben ser mayores a cero y numéricos.";
      document.getElementById('resultado').innerHTML = `<span class="error">${mensaje}</span>`;
      return;
    }

    distancia = Math.sqrt(
      Math.pow(xb - xa, 2) + 
      Math.pow(yb - ya, 2) + 
      Math.pow(zb - za, 2)
    );
  }

  document.getElementById('resultado').innerHTML = `La distancia entre A y B es: <strong>${distancia.toFixed(4)}</strong>`;
}