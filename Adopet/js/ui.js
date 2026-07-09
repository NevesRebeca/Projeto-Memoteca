import api from "./api.js";

const ui = {
  async renderizarPets() {
    const listaPets = document.getElementById("lista-pets");

    try {
      // chamando a API
      const pets = await api.buscarPets();
      // criar os itens da lista de forma dinâmica
      pets.forEach((pet) => {
        listaPets.innerHTML += `
        <li class="li-pensamento" data-id="${pet.id}">
          <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
          <div class="pensamento-conteudo">${pet.nome}</div>
          <div class="pensamento-autoria">${pet.raca}</div>
          <div class="pensamento-especie">${pet.especie}</div>
          </li>
        `;
      });
    } catch {
      alert("Erro ao carregar a página");
    }
  },
};

export default ui;
