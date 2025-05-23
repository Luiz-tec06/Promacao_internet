let Largura = document.querySelector("#Largura");
let Comprimento = document.querySelector("#Comprimento");
let Botao = document.querySelector("#Botao");
let Resultado = document.querySelector("#Resultado");

function CalcularArea(){
    let lar = Number(Largura.value);
    let com = Number(Comprimento.value);

    let area = lar * com

    Resultado.innerHTML = "A Area do terreno e:" + area + "m²"
}

Botao.onclick = function() {
    CalcularArea();
}