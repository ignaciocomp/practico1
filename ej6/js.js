let valor
let tipoCambio
let conversion

document.querySelector("#btnCalcular").addEventListener("click", convertir)

function convertir() {
    valor = Number(document.querySelector("#txtValor").value)
    tipoCambio = Number(document.querySelector("#txtTipoCambio").value)
    conversion = valor / tipoCambio

    document.querySelector("#pResultado").innerHTML = conversion
}