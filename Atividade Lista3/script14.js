let conta = document.querySelector("#conta");
let botao = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

function calcularConta() {
    let valorTotal = Number(conta.value);
    let parteInteira = Math.floor(valorTotal / 3);

    let carlos = parteInteira;
    let andre = parteInteira;
    let felipe = valorTotal - (carlos + andre);

    resultado.innerHTML = `Carlos paga R$${carlos.toFixed(2)}<br>
                           André paga R$${andre.toFixed(2)}<br>
                           Felipe paga R$${felipe.toFixed(2)}`;
}

botao.onclick = calcularConta;