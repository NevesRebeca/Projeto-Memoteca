import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPets();

  const formularioPet = document.getElementById("pets-form");
  const botaoCancelar = document.getElementById("botao-cancelar");

  formularioPet.addEventListener("submit", manipularSubmissaoFormulario);
  botaoCancelar.addEventListener("click", manipularCancelamentoFormulario);
});

async function manipularSubmissaoFormulario(event) {
  event.preventDefault();

  const id = document.getElementById("pet-id").value;
  const nome = document.getElementById("pet-nome").value;
  const raca = document.getElementById("pet-raca").value;
  const especie = document.getElementById("pet-especie").value;

  try {
    await api.salvarPet({ nome, raca, especie });
    ui.renderizarPets();
  } catch {
    alert("Erro ao salvar pet!");
  }
}

function manipularCancelamentoFormulario() {
  ui.limparFormulario();
}
