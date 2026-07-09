// responsável pela lógica principal do carregamento da aplicação

// DOMContentLoaded - evento que é disparado quando o HTML foi completamente carregado e analisado, sem aguardar o CSS, imagens e subframes terminarem de carregar
import ui from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos();
});
