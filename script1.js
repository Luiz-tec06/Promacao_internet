let Reajuste = document.querySelector("#Reajuste");
let Caixa = document.querySelector("#Caixa");
let Um = document.querySelector("#Um");
let Dois = document.querySelector("#Dois");
let Cinco = document.querySelector("#Cinco");
let Dez = document.querySelector("#Dez");

function Reajustar(porcentagem){
    let valor = Number (Caixa.value)
    let valorreajustado = (valor * (porcentagem / 100)) + valor

    Reajuste.textContent = valorreajustado;
}

Um.onclick = function(){
    Reajustar(1);
}

Dois.onclick = function(){
    Reajustar(2);
}

Cinco.onclick = function(){
    Reajustar(5);
}

Dez.onclick = function(){
    Reajustar(10);
}