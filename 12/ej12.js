let altura
let peso
let imc

document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular() {
    altura = Number(document.querySelector("#altura").value)
    peso = Number(document.querySelector("#peso").value)

    imc = (peso / (altura * altura))

    document.querySelector("#pResultado").innerHTML = imc

}