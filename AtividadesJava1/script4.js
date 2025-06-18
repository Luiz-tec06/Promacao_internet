let Resultado = document.querySelector("#Resultado");
let Num1 = document.querySelector("#Num1");
let Num2 = document.querySelector("#Num2");
let Num3 = document.querySelector("#Num3");
let Botao = document.querySelector("#Botao");

function Calcular(){
    let N1 = Number(Num1.value);
    let N2 = Number(Num2.value);
    let N3 = Number(Num3.value);
    
    let MediaAritmetica = (N1 + N2 + N3) /3;
    let MediaPonderada = (N1 * 3 + N2 * 2 + N3 * 5) / (3 + 2 + 5);
    let Soma = MediaAritmetica + MediaPonderada;
    let MediadasMedias = Soma / 2;

    Resultado.textContent =
    "MediaAritmetica: " + MediaAritmetica.toFixed(2) +
    " | MediaPonderada: " + MediaPonderada.toFixed(2) +
    " | Soma: " + Soma.toFixed(2) +
    " | MediadasMedias: " + MediadasMedias.toFixed(2);
}

Botao.onclick = Calcular;