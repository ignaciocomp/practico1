let valor1
let resultado

document.querySelector("#btnCalcular").addEventListener("click", sumarValores)

function sumarValores() {
    valor1 = Number(document.querySelector("#valor1").value)
    resultado = valor1 * valor1
    document.querySelector("#pArea").innerHTML = resultado
}