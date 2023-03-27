document.querySelector("#btnCalcular").addEventListener("click", contar)

let contador = 0

function contar() {
    contador ++

    document.querySelector("#pContador").innerHTML = contador
}