let Cavalos = document.querySelector("#Cavalos");
let Botao = document.querySelector("#Botao");
let Resultado = document.querySelector("#Resultado");

function CalcularFerraduras(){
    let quantidade = Number (Cavalos.value);
    let ferraduras = quantidade * 4;

   Resultado.innerHTML = "Sao necessarias " + ferraduras + " ferraduras.";
}

Botao.onclick = function(){
    CalcularFerraduras();
}