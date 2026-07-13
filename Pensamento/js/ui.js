//User Interface (UI) - função para poder renderizar os pensamentos
// Manipula o DOM (cria elementos, limpa formulário, etc).  Não sabe fazer requisição sozinho, quando precisa de dados, pede pro api.js.

import api from "./api.js";

const ui = {
  async preencherFormulario(pensamentoId) {
    const pensamento = await api.buscarPensamentoPorId(pensamentoId);
    document.getElementById("pensamento-id").value = pensamento.id;
    document.getElementById("pensamento-conteudo").value = pensamento.conteudo;
    document.getElementById("pensamento-autoria").value = pensamento.autoria;
  },

  limparFormulario() {
    // .reset: método nativo de formulários HTML que limpa todos os campos preenchidos de volta ao estado inicial, se você precisar zerar campo por campo manualmente
    document.getElementById("pensamento-form").reset();
  },

  async renderizarPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos");
    const mensagemVazia = document.getElementById("mensagem-vazia");
    listaPensamentos.innerHTML = "";

    try {
      // chamando a API
      const pensamentos = await api.buscarPensamentos();
      // chamando a função para criação de pensamentos
      pensamentos.forEach(ui.adicionarPensamento);
      if (pensamentos.lenght === 0) {
        mensagemVazia.style.display = "block";
      } else {
        mensagemVazia.style.display = "none";
        pensamentos.forEach(ui.adicionarPensamento);
      }
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

    //criando o botão de editar
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-editar");
    botaoEditar.onclick = () => ui.preencherFormulario(pensamento.id); // chamando a função preencherFormulario passando o id do pensamento
    // aero function?

    const iconeEditar = document.createElement("img");
    iconeEditar.src = "assets/imagens/icone-editar.png";
    iconeEditar.alt = "Editar";
    botaoEditar.appendChild(iconeEditar); // adicionando o ícone de editar ao botão de editar

    const botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.onclick = async () => {
      try {
        await api.excluirPensamento(pensamento.id);
        ui.renderizarPensamentos();
      } catch (error) {
        alert("Erro ao excluir pensamento");
      }
    };

    const iconeExcluir = document.createElement("img");
    iconeExcluir.src = "assets/imagens/icone-excluir.png";
    iconeExcluir.alt = "Excluir";
    botaoExcluir.appendChild(iconeExcluir); // adicionando o ícone de editar ao botão de excluir

    const icones = document.createElement("div");
    icones.classList.add("icones");
    icones.appendChild(botaoEditar); // adicionando o botão de editar ao div icones
    icones.appendChild(botaoExcluir);

    // adicionando os elementos criados à lista
    li.appendChild(iconeAspas);
    li.appendChild(pensamentoConteudo);
    li.appendChild(pensamentoAutoria);
    li.appendChild(icones);
    listaPensamentos.appendChild(li);
  },
};

export default ui;
