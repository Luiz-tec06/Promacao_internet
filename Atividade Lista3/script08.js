let pequeno = document.querySelector("#pequeno");
let medio = document.querySelector("#medio");
let grande = document.querySelector("#grande");
let Botao = document.querySelector("#Botao");
let Resultado = document.querySelector("#Resultado");

function CalcularTotal(){
 let peq = Number (pequeno.value);
 let med = Number (medio.value);
 let gran = Number (grande.value);

 let total = (peq * 10) + (med * 12) + (gran * 15);

 Resultado.innerHTML = "O valor arrecadado foi R$ " + total;
}

Botao.onclick = function(){
    CalcularTotal();
}