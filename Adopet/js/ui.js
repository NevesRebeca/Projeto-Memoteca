import api from "./api.js";

const ui = {
  async renderizarPets() {
    const listaPets = document.getElementById("lista-pets");

    try {
      // chamando a API
      const pets = await api.buscarPets();
      // criar os itens da lista de forma dinâmica
      pets.forEach(ui.adicionarPetNaLista);
    } catch {
      alert("Erro ao carregar a página");
    }
  },

  adicionarPetNaLista(pet) {
    const listaPets = document.getElementById("lista-pets");
    const li = document.createElement("li");
    li.setAttribute("data-id", pet.id);
    li.classList.add("li-pet");

    const iconeAspas = document.createElement("img");
    iconeAspas.src = "assets/imagens/aspas-azuis.png";
    iconeAspas.alt = "Ícone de aspas azuis";
    iconeAspas.classList.add("icone-aspas");

    const nomePet = document.createElement("div");
    nomePet.textContent = pet.nome;
    nomePet.classList.add("pensamento-nome");

    const racaPet = document.createElement("div");
    racaPet.textContent = pet.raca;
    racaPet.classList.add("pensamento-raca");

    const especiePet = document.createElement("div");
    especiePet.textContent = pet.especie;
    especiePet.classList.add("pensamento-especie");

    li.appendChild(iconeAspas);
    li.appendChild(nomePet);
    li.appendChild(racaPet);
    li.appendChild(especiePet);

    listaPets.appendChild(li);
  },

  limparFormulario() {
    document.getElementById("pets-form").reset();
  },
};

export default ui;
