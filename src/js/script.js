

const botaoAlterarTema = document.getElementById("tema");

const body = document.querySelector("body");

const trocaImagemDoTema = document.querySelector(".botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    if (modoEscuroAtivo) {
        body.classList.remove("modo-escuro");
        trocaImagemDoTema.setAttribute("src", "./src/imagens/sun.png");
        } else {
            body.classList.add("modo-escuro");

            trocaImagemDoTema.setAttribute("src", "./src/imagens/moon.png");
    }
});
