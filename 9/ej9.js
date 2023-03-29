let valor1
let valor2
let valor3
let resultado

document.querySelector("#btnCalcular").addEventListener("click", sumarValores)

function sumarValores() {
    valor1 = Number(document.querySelector("#valor1").value)
    valor2 = Number(document.querySelector("#valor2").value)
    valor3 = Number(document.querySelector("#valor3").value)
    resultado = (valor1**2) - (valor2 + valor3)
    document.querySelector("#pResultado").innerHTML = resultado
}