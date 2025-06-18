let dia = document.querySelector("#dia");
let mes = document.querySelector("#mes");
let Botao = document.querySelector("#Botao")
let Resultado = document.querySelector("#Resultado")

function CalcularDias(){
    let d = Number (dia.value);
    let m = Number (mes.value);

    let diaspassados = (m - 1) * 30 + d;

    Resultado.innerHTML = "Ja se passaram " + diaspassados + " dias desde o inicio do ano.";
}

Botao.onclick = function(){
    CalcularDias();
}