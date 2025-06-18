let preco = document.querySelector("#preco");
let valor = document.querySelector("#valor");
let botao = document.querySelector("#botao");
let Resultado = document.querySelector("#Resultado");

function CalcularLitros (){
    let p = Number (preco.value);
    let v = Number (valor.value);

    let litros = v / p;

    Resultado.innerHTML = "Voce conseguiu colocar " + litros + " litros de gasolina.";
}

botao.onclick = function() {
    CalcularLitros();
}