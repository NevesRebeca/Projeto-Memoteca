// responsável pela lógica principal do carregamento da aplicação

// DOMContentLoaded - evento que é disparado quando o HTML foi completamente carregado e analisado, sem aguardar o CSS, imagens e subframes terminarem de carregar
import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos();

  const formularioPensamento = document.getElementById("pensamento-form");
  formularioPensamento.addEventListener("submit", manipularSubmissaFormulario);
});

async function manipularSubmissaFormulario(event) {
  // previne o comportamento padrão do formulário, que é recarregar a página
  event.preventDefault();

  // pegando os valores dos inputs do formulário (ID, conteudo e autoria)
  const id = document.getElementById("pensamento-id").value;
  const conteudo = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;

  try {
    await api.salvarPensamento({ conteudo, autoria });
    ui.renderizarPensamentos();
  } catch {
    alert("Erro ao salvar pensamento");
  }
}
