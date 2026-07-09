//User Interface (UI) - função para poder renderizar os pensamentos
import api from "./api.js";

const ui = {
  async renderizarPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos");

    try {
      // chamando a API
      const pensamentos = await api.buscarPensamentos();
      // criar os itens da lista de forma dinâmica
      pensamentos.forEach((pensamento) => {
        listaPensamentos.innerHTML += `
        <li class="li-pensamento" data-id="${pensamento.id}">
          <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
          <div class="pensamento-conteudo">${pensamento.conteudo}</div>
          <div class="pensamento-autoria">${pensamento.autoria}</div>
          </li>
        `;
      });
    } catch {
      alert("Erro ao renderizar pensamentos");
    }
  },
};

export default ui;
