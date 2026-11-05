let botoes = document.querySelectorAll(".filtros button");

let paises = document.querySelectorAll(".pais");

let secoes = document.querySelectorAll("section");

botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        let filtro = botao.textContent;

        filtro = filtro.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    

        secoes.forEach(function(secao) {

            if (filtro === "todos") {

                secao.style.display = "block";

            } else if (secao.querySelector("." + filtro)) {

                secao.style.display = "block";

            } else {

                secao.style.display = "none";

            }

        });

        paises.forEach(function(pais) {

            if (filtro === "todos") {

                pais.style.display = "inline-block";

            } else if (pais.classList.contains(filtro)) {

                pais.style.display = "inline-block";

            } else {

                pais.style.display = "none";

            }

        });

    });
});