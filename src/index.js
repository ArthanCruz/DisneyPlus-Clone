window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  let scroll = window.scrollY;

  if (scroll > 10) {
    header.style.opacity = "1";
  } else {
    header.style.opacity = "0";
  }
});

function capa(filme, nome) {
  let filmes = document.querySelector(".filmes");
  let div = document.createElement("div");
  div.classList.add("filme");

  div.innerHTML = ` <img src="${filme}" alt="${nome}" title="${nome}" >`;

  filmes.append(div);
}

function apiFilmes() {
  fetch("https://sujeitoprogramador.com/r-api/?api=filmes/").then(
    (resposta) => {
      resposta.json().then((respostaJson) => {
        respostaJson.forEach((filme) => {
          capa(filme.foto, filme.nome);
        });
      });
    }
  );
}

apiFilmes();
