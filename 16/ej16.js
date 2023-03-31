let ganados
let empatados
let perdidos
let resultado

document.querySelector("#btnCalcular").addEventListener("click", calcularPartidos)

function calcularPartidos() {
    ganados = Number(document.querySelector("#partidosGanados").value)

    empatados = Number(document.querySelector("#partidosEmpatados").value)

    perdidos = Number(document.querySelector("#partidosPerdidos").value)

    resultado = (ganados * 3) + (empatados * 1) + (perdidos * 0)

    document.querySelector("#pResultado").innerHTML = resultado
}