// responsável por conter as requisições HTTP para a API

const api = {
  async buscarPensamentos() {
    // caso algum erro na requisição, o try catch vai capturar e exibir no console
    try {
      const response = await fetch("http://localhost:5500/pensamentos");
      return await response.json(); // fazer a conversão do formato json para o objeto JS
    } catch {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },
};

// para usar esse objeto em outros arquivos, é necessário exportá-lo
export default api;
