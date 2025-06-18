let paes = document.querySelector("#paes");
let broas = document.querySelector("#broas");
let botao = document.querySelector("#botao");
let quantidadeVendas = document.querySelector("#quantidadeVendas");
let poupanca = document.querySelector("#poupanca");
 
function valores(){
    let P = Number(paes.value);
    let B = Number(broas.value);

    let Vp = (P * 0.12);
    let Vb = (B * 1.50);

    let TotalVendas = (Vp + Vb);
    let TotalPoupanca = (TotalVendas * 0.10);

    quantidadeVendas.innerHTML = `Vendas do dia: ${TotalVendas.toFixed(2)}`;
    poupanca.innerHTML = `Valor da poupanca do dia: ${TotalPoupanca.toFixed(2)}`;
}

botao.onclick = function(){
    valores();
}