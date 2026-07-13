// responsável por conter as requisições HTTP para a API
// Só conversa com o servidor (fetch). Não sabe nada sobre a tela. E até o momento possui duas funções:
// buscarPensamentos() -> GET
// salvarPensamento() -> POST

const api = {
  async buscarPensamentos() {
    // caso algum erro na requisição, o try catch vai capturar e exibir no console
    try {
      // O fetch por padrão realiza um fetch do tipo GET, então não é necessário passar o método
      const response = await fetch("http://localhost:5500/pensamentos");
      return await response.json(); // fazer a conversão do formato json para o objeto JS
    } catch {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },

  // Cadastro de pensamento - insert
  async salvarPensamento(pensamento) {
    // caso algum erro na requisição, o try catch vai capturar e exibir no console
    try {
      const response = await fetch("http://localhost:5500/pensamentos", {
        //ação que quero fazer nessa requisição, nesse caso é um POST
        method: "POST",
        //cabeçalhos da requisição
        headers: {
          "Content-Type": "application/json", // informar que o conteúdo da requisição é do tipo json
        },
        //body da requisição é o objeto JS que contém os dados
        body: JSON.stringify(pensamento), // converter o objeto JS para o formato json, pois é o formato que a API espera receber
      });
      return await response.json(); // fazer a conversão do formato json para o objeto JS
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
      const response = await fetch(`http://localhost:5500/pensamentos/${id}`); //template string????
      return await response.json(); // fazer a conversão do formato json para o objeto JS
    } catch {
      alert("Erro ao buscar pensamento");
      throw error;
    }
  },

  // 2. alterar pensamento - PUT
  async editarPensamento(pensamento) {
    try {
      const response = await fetch(
        `http://localhost:5500/pensamentos/${pensamento.id}`,
        {
          //ação que quero fazer nessa requisição, nesse caso é um PUT
          method: "PUT",
          //cabeçalhos da requisição
          headers: {
            "Content-Type": "application/json", // informar que o conteúdo da requisição é do tipo json
          },
          //body da requisição é o objeto JS que contém os dados
          body: JSON.stringify(pensamento), // converter o objeto JS para o formato json, pois é o formato que a API espera receber
        },
      );
      return await response.json(); // fazer a conversão do formato json para o objeto JS
    } catch {
      alert("Erro ao editar pensamento");
      throw error;
    }
  },
};

// para usar esse objeto em outros arquivos, é necessário exportá-lo
export default api;
