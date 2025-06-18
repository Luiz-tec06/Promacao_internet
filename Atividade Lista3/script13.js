let raio = document.querySelector("#raio");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcularArea() {
    let r = Number(raio.value);
    let pi = 3.14;
    let area = pi * r * r;

    resultado.innerHTML = "A área da pizza é " + area.toFixed(2) + " cm².";
}

botao.onclick = function() {
    calcularArea();
};