// responsável por conter as requisições HTTP para a API

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
};

// para usar esse objeto em outros arquivos, é necessário exportá-lo
export default api;
