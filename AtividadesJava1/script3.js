let Resultado = document.querySelector("#Resultado");
let Valor = document.querySelector("#Valor");
let Quantia = document.querySelector("#Quantia");
let Botao = document.querySelector("#Botao");

function Multiplicar() {
    let caixa = Number (Valor.value);
    let caixa2 = Number (Quantia.value);
    Resultado.textContent = caixa * caixa2;
}

Botao.onclick = function(){
    Multiplicar();
}