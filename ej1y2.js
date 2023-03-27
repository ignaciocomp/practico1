let Nombre
let Apellido
let Mostrar

document.querySelector("#btnMostrar").addEventListener("click", SumarValores)

function SumarValores() {
    Nombre = document.querySelector("#txtNombre").value 
    Apellido = document.querySelector("#txtApellido").value
    Mostrar = Apellido + ", " + Nombre
    document.querySelector("#pMostrar").innerHTML = Mostrar
}


let Valor1
let Valor2
let Resultado

document.querySelector("#btnResultado").addEventListener("click", SumarValores1)

function SumarValores1() {
    Valor1 = Number(document.querySelector("#Valor1").value)
    Valor2 = Number(document.querySelector("#Valor2").value)
    Resultado = Valor1 + Valor2
    document.querySelector("#pResultado").innerHTML = Resultado
}
