document.addEventListener("DOMContentLoaded", function () {
  const filmesContainer = document.getElementById("filmes-container");

  async function fecthFilmes() {
    try {
      const res = await fetch("http://localhost:3000/filmes");
      const filmes = await res.json();

      displayFilmes(filmes);
    } catch (error) {
      console.log("Erro ao buscar filmes: ", error.message);
    }
  }

  function displayFilmes(filmes) {
    filmesContainer.innerHTML = "";

    filmes.forEach((filme) => {
      const filmeCard = document.createElement("div");
      filmeCard.classList.add("col");

      filmeCard.innerHTML = `
        <div class="card">
            <div class="card-body p-0">
                <h5 class="card-title m-0 p-1">${filme.titulo}</h5>
                <small class="p-1">${filme.categoria_nome}</small>
                <p class="card-text mt-2 p-1">${filme.descricao}</p>
                <small class="card-text mt-2 p-1">${
                  filme.categoria_descricao
                }</small>
                <div class="card-footer text-muted text-end">${
                  filme.assistido_em ?? "01/01/2024"
                }</div>
        </div> 
      `;

      filmesContainer.appendChild(filmeCard);
    });
  }
  fecthFilmes();
});
