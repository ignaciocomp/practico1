let contador = 0
document.querySelector("#btnContar").addEventListener("click", suma3)

function suma3(){
    contador += 3;

    document.querySelector("#pContador").innerHTML = contador
}