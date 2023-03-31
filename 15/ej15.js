let total = 0
alert("hika")

let acomular
let mostrar
let valor

acomular = document.querySelector("#btnAcumular").addEventListener("click", sumarValor)
mostrar = document.querySelector("#btnResultado").addEventListener("click", sumarResultado)

function sumarValor() {
    valor = Number(document.querySelector("#valor1").value)
    total += valor
    document.querySelector("#valor1").value = ""
    
}

function sumarResultado() {
    
    document.querySelector("#pResultado").innerHTML = total
    
}