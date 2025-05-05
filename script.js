  let h1Texto = document.querySelector("#h1Texto");
  let inputTexto = document.querySelector("#inputTexto");
  let btTrocatexto = document.querySelector("#btTrocatexto");

  function trocartexto(){
    // RETORNANDO O TEXTO DIGITADO NO CAMPO
    let textodigitado = inputTexto.value;
    //ALYERANDO O TEXTO DO ELEMENTO H1
    h1Texto.textContent = textodigitado;
  }

  btTrocatexto.onclick = function(){
    trocartexto();
  }
