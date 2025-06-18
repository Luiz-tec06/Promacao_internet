let nota1Bim = document.querySelector("#nota1Bim");
let nota2Bim = document.querySelector("#nota2Bim");
let btaprovacao = document.querySelector("#btaprovacao");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularMediaAluno (){
       let nota1 = Number (nota1Bim.value);
       let nota2 = Number (nota2Bim.value);

       let media = (nota1 + nota2) / 2;

       if(media >= 60){
            h3Resultado.textContent = "O aluno esta Aprovado!!!"
       }else{
             h3Resultado.textContent = "O aluno esta Reprovado!!!"
       }


}

btaprovacao.onclick = function(){
    calcularMediaAluno();
}