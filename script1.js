function somar() {
let numero1 = parseFloat(document.getElementById("num1").value);
 let numero2 = parseFloat(document.getElementById("num2").value);
let resultado = numero1 + numero2;

document.getElementById("resultado").innerText = "Resultado: " + resultado;
}