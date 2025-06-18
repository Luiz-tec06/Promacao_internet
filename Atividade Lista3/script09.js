         let x1 = document.querySelector("#x1");
        let y1 = document.querySelector("#y1");
        let x2 = document.querySelector("#x2");
        let y2 = document.querySelector("#y2");
        let botao = document.querySelector("#botao");
        let resultado = document.querySelector("#resultado");

        function Calcular() {
            let a = Number(x1.value);
            let b = Number(y1.value);
            let c = Number(x2.value);
            let d = Number(y2.value);

            let dx = c - a;
            let dy = d - b;
            let distanciaAoQuadrado = (dx * dx) + (dy * dy);

            resultado.innerHTML = "A distância ao quadrado entre os pontos é " + distanciaAoQuadrado;
        }

        botao.onclick = function() {
            Calcular();
        }
