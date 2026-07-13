// responsável pela lógica principal do carregamento da aplicação. Não manipula tela nem faz requisição diretamente. Só liga eventos (clique, submit, etc) às ações certas, chamando ui ou pi quando algo acontece.

// DOMContentLoaded - evento que é disparado quando o HTML foi completamente carregado e analisado, sem aguardar o CSS, imagens e subframes terminarem de carregar

import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos();

  const formularioPensamento = document.getElementById("pensamento-form");
  const botaoCancelar = document.getElementById("botao-cancelar");

  formularioPensamento.addEventListener("submit", manipularSubmissaFormulario);
  botaoCancelar.addEventListener("click", manipularCancelamento);
});

async function manipularSubmissaFormulario(event) {
  // previne o comportamento padrão do formulário, que é recarregar a página
  event.preventDefault();

  // pegando os valores dos inputs do formulário (ID, conteudo e autoria)
  const id = document.getElementById("pensamento-id").value;
  const conteudo = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;

  try {
    if (id) {
      await api.editarPensamento({ id, conteudo, autoria });
    } else {
      await api.salvarPensamento({ conteudo, autoria });
    }
    ui.renderizarPensamentos();
  } catch {
    alert("Erro ao salvar pensamento");
  }
}
// ponte que coneca o clique à ação de limpar o formulário, chamando a função ui.limparFormulario(), que realmente limpa o formulário
function manipularCancelamento() {
  ui.limparFormulario();
}
