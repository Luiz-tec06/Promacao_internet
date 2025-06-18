let numero = document.querySelector("#numero");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function analisarNumero() {
    let valor = Number(numero.value);

    if (valor < 0 || valor > 999) {
        resultado.innerHTML = "Por favor, digite um número entre 0 e 999.";
        return;
    }

    let centena = Math.floor(valor / 100);
    let dezena = Math.floor((valor % 100) / 10);
    let unidade = valor % 10;

    resultado.innerHTML = "CENTENA = " + centena + "<br>" +
                          "DEZENA = " + dezena + "<br>" +
                          "UNIDADE = " + unidade;
}

botao.onclick = function() {
    analisarNumero();
};