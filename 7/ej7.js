let valor1
let valor2
let resultado

document.querySelector("#btnCalcular").addEventListener("click", sumarValores)

function sumarValores() {
    valor1 = Number(document.querySelector("#valor1").value)
    valor2 = Number(document.querySelector("#valor2").value)
    resultado = valor1 / valor2
    document.querySelector("#pResultado").innerHTML = resultado
}