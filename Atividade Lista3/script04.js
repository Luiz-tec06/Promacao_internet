let Nome = document.querySelector("#Nome");
let Idade = document.querySelector("#Idade");
let Botao = document.querySelector("#Botao");
let Resultado = document.querySelector("#Resultado");

function CalcularIdade() {
    let N = Nome.value;
    let idadePessoa = Number(Idade.value);
    let dias = idadePessoa * 365;

    Resultado.innerHTML = N + " voce ja viveu " + dias + " dias";
}

Botao.onclick = function() {
    CalcularIdade();
}