function mostrarFormulario() {
    const tipo = document.getElementById("tipo").value;


    document.getElementById("input-rectangular").style.display = "none";
    document.getElementById("input-circular").style.display = "none";
    document.getElementById("input-seccion").style.display = "none";
    

  if (tipo === "rectangular") {
        document.getElementById("input-rectangular").style.display = "block";
    }   else if (tipo === "circular") {
        document.getElementById("input-circular").style.display = "block";
    }
    else if (tipo === "seccion") {
        document.getElementById("input-seccion").style.display = "block";
    }
}

function calcularCaudal() {
const tipo = document.getElementById("tipo").value;
    let resultado = "";

if (tipo === "rectangular") {
        const a = document.getElementById("ladoA").value;
        const b = document.getElementById("ladoB").value;
        const v = document.getElementById("velocidad-rectangular").value;

        if (isNaN(a) || isNaN(b) || isNaN(v) || a <= 0 || b <= 0 || v <= 0) {
            resultado = "Ingrese valores válidos para lados y velocidad.";
        } else {
            const area = a * b;
            const caudal = area * v;
            resultado = `Caudal: ${caudal} m/s`;
        }


    } else if (tipo === "seccion") {
        const s = document.getElementById("seccion").value;
        const v = document.getElementById("velocidad-seccion").value;

        if (isNaN(s) || isNaN(v) || s <= 0 || v <= 0) {
            resultado = "Ingrese valores válidos para sección y velocidad.";
        } else {
            const caudal = s * v;
            resultado = `Resultado: ${caudal} m/s`;
        }

         } else if (tipo === "circular") {
        const d = parseFloat(document.getElementById("diametro").value);
        const v = parseFloat(document.getElementById("velocidad-circular").value);

        if (isNaN(d) || isNaN(v) || d <= 0 || v <= 0) {
            resultado = "Ingrese un diámetro y velocidad válidos.";
        } else {

            resultado = `Resultado: ${caudal} m/s`;

        }

    } else {
        resultado = "Por favor seleccione una opción de cálculo.";
    }

    document.getElementById("resultado").textContent = resultado;
}

function limpiarTodo() {
    document.getElementById("tipo").value = "";
    mostrarFormulario();
    document.getElementById("resultado").textContent = "";
}
