// responsável por conter as requisições HTTP para a API
// Só conversa com o servidor (fetch). Não sabe nada sobre a tela. E até o momento possui duas funções:
// buscarPensamentos() -> GET
// salvarPensamento() -> POST

const URL_BASE = "http://localhost:5500";

const api = {
  async buscarPensamentos() {
    // caso algum erro na requisição, o try catch vai capturar e exibir no console
    try {
      // O fetch por padrão realiza um fetch do tipo GET, então não é necessário passar o método
      const response = await axios.get(`${URL_BASE}/pensamentos`); //template string?ç
      return await response.data; // fazer a conversão do formato json para o objeto JS
    } catch {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },

  // Cadastro de pensamento - insert
  async salvarPensamento(pensamento) {
    // caso algum erro na requisição, o try catch vai capturar e exibir no console
    try {
      const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento);
      return await response.data; // fazer a conversão do formato json para o objeto JS
    } catch {
      alert("Erro ao salvar pensamento");
      throw error;
    }
  },

  // Para realizar o Método PUT é necessário primeiro que buscar o pensamento pelo ID, para isso é necessário criar uma função que faça a busca do pensamento pelo ID, e depois criar uma função que faça a alteração do pensamento, utilizando o método PUT.

  // 1. buscar o pensamento pelo ID - select/GET/fetch
  async buscarPensamentoPorId(id) {
    try {
      // O fetch por padrão realiza um fetch do tipo GET, então não é necessário passar o método
      const response = await axios.get(`${URL_BASE}/pensamentos/${id}`); //template string????
      return await response.data; // fazer a conversão do formato json para o objeto JS
    } catch {
      alert("Erro ao buscar pensamento");
      throw error;
    }
  },

  // 2. alterar pensamento - PUT
  async editarPensamento(pensamento) {
    try {
      const response = await axios.put(
        `${URL_BASE}/pensamentos/${pensamento.id}`,
        pensamento,
      );
      return await response.data; // fazer a conversão do formato json para o objeto JS
    } catch {
      alert("Erro ao editar pensamento");
      throw error;
    }
  },

  // Aplicando método delete
  async excluirPensamento(id) {
    try {
      const response = await axios.delete(
        `${URL_BASE}/pensamentos/${id}`,
        pensamento,
      );
    } catch {
      alert("Erro ao excluir o pensamento");
      throw error;
    }
  },
};

// para usar esse objeto em outros arquivos, é necessário exportá-lo
export default api;
