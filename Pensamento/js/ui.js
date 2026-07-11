//User Interface (UI) - função para poder renderizar os pensamentos
import api from "./api.js";

const ui = {
  async renderizarPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos");

    try {
      // chamando a API
      const pensamentos = await api.buscarPensamentos();
      // chamando a função para criação de pensamentos
      pensamentos.forEach(ui.adicionarPensamento);
    } catch {
      alert("Erro ao renderizar pensamentos");
    }
  },

  adicionarPensamento(pensamento) {
    const listaPensamentos = document.getElementById("lista-pensamentos");
    const li = document.createElement("li");
    li.setAttribute("data-id", pensamento.id);
    li.classList.add("li-pensamento"); // cria um item da lista com a classe li-pensamento

    //icone da lista - criando
    const iconeAspas = document.createElement("img");
    iconeAspas.src = "assets/imagens/aspas-azuis.png";
    iconeAspas.alt = "Aspas azuis";
    iconeAspas.classList.add("icone-aspas"); // adicionando a classe icone-aspas

    const pensamentoConteudo = document.createElement("div");
    pensamentoConteudo.textContent = pensamento.conteudo;
    pensamentoConteudo.classList.add("pensamento-conteudo"); // adicionando a classe pensamento-conteudo

    const pensamentoAutoria = document.createElement("div");
    pensamentoAutoria.textContent = pensamento.autoria;
    pensamentoAutoria.classList.add("pensamento-autoria"); // adicionando a classe pensamento-autoria

    // adicionando os elementos criados à lista
    li.appendChild(iconeAspas);
    li.appendChild(pensamentoConteudo);
    li.appendChild(pensamentoAutoria);
    listaPensamentos.appendChild(li);
  },

  limparFormulario() {
    // .reset: método nativo de formulários HTML que limpa todos os campos preenchidos de volta ao estado inicial, se você precisar zerar campo por campo manualmente
    document.getElementById("pensamento-form").reset();
  },
};

export default ui;
