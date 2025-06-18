let Peso = document.querySelector("#Peso");
let botao = document.querySelector("#botao");
let Resultado = document.querySelector("#Resultado");

function Calcular (){
let Quilos = Number(Peso.value);

let ValorTotal = Quilos * 12; 

Resultado.innerHTML = `Valor total: R$ ${ValorTotal.toFixed(2)}`;
}

botao.onclick = function(){
    Calcular();
}