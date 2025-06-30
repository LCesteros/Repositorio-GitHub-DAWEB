function mostrar() {
    document.getElementById("circular").style.display = "none";
    document.getElementById("rectangular").style.display = "none";
    document.getElementById("seccion").style.display = "none";

    const tipo = document.getElementById("tipo").value;
    if (tipo) {
        document.getElementById(tipo).style.display = "block";
    }
}

function calcular() {
    const tipo = document.getElementById("tipo").value;
    let resultado = "";

    if (tipo === "circular") {
        const d = parseFloat(document.getElementById("diametro").value);
        const v = parseFloat(document.getElementById("velocidad1").value);
        if (d > 0 && v > 0) {
            const area = Math.PI * (d / 2) ** 2;
            resultado = "Caudal: " + (area * v).toFixed(3) + " m³/s";
        } else {
            resultado = "Ingrese valores válidos.";
        }

    } else if (tipo === "rectangular") {
        const a = parseFloat(document.getElementById("ladoA").value);
        const b = parseFloat(document.getElementById("ladoB").value);
        const v = parseFloat(document.getElementById("velocidad2").value);
        if (a > 0 && b > 0 && v > 0) {
            resultado = "Caudal: " + (a * b * v).toFixed(3) + " m³/s";
        } else {
            resultado = "Ingrese valores válidos.";
        }

    } else if (tipo === "seccion") {
        const s = parseFloat(document.getElementById("area").value);
        const v = parseFloat(document.getElementById("velocidad3").value);
        if (s > 0 && v > 0) {
            resultado = "Caudal: " + (s * v).toFixed(3) + " m³/s";
        } else {
            resultado = "Ingrese valores válidos.";
        }
    }

    document.getElementById("resultado").textContent = resultado;
}

function limpiar() {
    document.getElementById("tipo").value = "";
    mostrar();
    document.querySelectorAll("input").forEach(i => i.value = "");
    document.getElementById("resultado").textContent = "";
}