let historialOperaciones = [];

function mostrarHistorial() {
    const historialElement = document.getElementById("historial");
    historialElement.innerHTML = "";

    historialOperaciones.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `${index + 1}. ${item}`;
        historialElement.appendChild(li);
    });
}

function sumar() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let resultado = a + b;
    document.getElementById("result").innerHTML = resultado;
    historialOperaciones.push(`${a} + ${b} = ${resultado}`);
    mostrarHistorial();
}

function restar() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let resultado = a - b;
    document.getElementById("result").innerHTML = resultado;
    historialOperaciones.push(`${a} - ${b} = ${resultado}`);
    mostrarHistorial();
}

function multiplicar() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let resultado = a * b;
    document.getElementById("result").innerHTML = resultado;
    historialOperaciones.push(`${a} * ${b} = ${resultado}`);
    mostrarHistorial();
}
