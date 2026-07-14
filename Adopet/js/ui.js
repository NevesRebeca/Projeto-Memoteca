import api from "./api.js";

const ui = {
  async preencherFormulario(petId) {
    const pet = await api.buscarPetPorId(petId);
    document.getElementById("pet-id").value = pet.id;
    document.getElementById("pet-nome").value = pet.nome;
    document.getElementById("pet-raca").value = pet.raca;
    document.getElementById("pet-especie").value = pet.especie;
  },

  limparFormulario() {
    document.getElementById("pets-form").reset();
  },

  async renderizarPets() {
    const listaPets = document.getElementById("lista-pets");
    const mensagemVazia = document.getElementById("mensagem-vazia");
    listaPets.innerHTML = "";

    try {
      // chamando a API
      const pets = await api.buscarPets();
      // criar os itens da lista de forma dinâmica
      pets.forEach(ui.adicionarPetNaLista);
      if (pets.lenght === 0) {
        mensagemVazia.style.display = "block";
      } else {
        mensagemVazia.style.display = "none";
        pets.forEach(ui.adicionarPetNaLista);
      }
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

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-editar");
    botaoEditar.onclick = () => ui.preencherFormulario(pet.id);

    const iconeEditar = document.createElement("img");
    iconeEditar.src = "assets/imagens/icone-editar.png";
    iconeEditar.alt = "Editar";
    botaoEditar.appendChild(iconeEditar);

    const botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.onclick = async () => {
      try {
        await api.excluirPet(pet.id);
        ui.renderizarPets();
      } catch (error) {
        alert("Erro ao excluir pet");
      }
    };

    const iconeExcluir = document.createElement("img");
    iconeExcluir.src = "assets/imagens/icone-excluir.png";
    iconeExcluir.alt = "Excluir";
    botaoExcluir.appendChild(iconeExcluir);

    const icones = document.createElement("div");
    icones.classList.add("icones");
    icones.appendChild(botaoEditar);
    icones.appendChild(botaoExcluir);

    li.appendChild(iconeAspas);
    li.appendChild(nomePet);
    li.appendChild(racaPet);
    li.appendChild(especiePet);
    li.appendChild(icones);
    listaPets.appendChild(li);
  },
};

export default ui;
