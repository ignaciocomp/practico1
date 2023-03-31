let TF
let TN 

document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular() {
    TF = Number(document.querySelector("#chirridos").value)
    TN = 50 + ((TF - 40) / 4 )
    document.querySelector("#pResultado").innerHTML = TN + " en Fahrenheit"
    document.querySelector("#pResultado1").innerHTML = ((TN - 32) / 1,8) + " en Celsius"
}