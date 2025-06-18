let Troco = document.querySelector("#Troco");
let Numero = document.querySelector("#Numero");
let Numero2 = document.querySelector("#Numero2");
let Botao = document.querySelector("#Botao");

function Subtrair(){
    //Retornando o texto digitado no campo
    let Caixa = Number (Numero.value);

    //Retornando o texto digitado no campo
    let Caixatexto = Number (Numero2.value);

    //Alternando o texto do elemento Texto
    Troco.textContent = Caixa - Caixatexto;
}

Botao.onclick = function (){
    Subtrair()
}