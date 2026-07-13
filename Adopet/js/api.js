// responsável por conter as requisições HTTP para a API

const api = {
  async buscarPets() {
    // caso algum erro na requisição, o try catch vai capturar e exibir no console
    try {
      const response = await fetch("http://localhost:5501/pets");
      return await response.json(); // fazer a conversão do formato json para o objeto JS
    } catch {
      alert("Erro ao buscar pets!");
      throw error;
    }
  },

  async salvarPet(pet) {
    try {
      const response = await fetch("http://localhost:5501/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
      });
      return await response.json();
    } catch (error) {
      alert("Erro ao cadastrar pet!");
      throw error;
    }
  },

  async buscarPetPorId(id) {
    try {
      const response = await fetch(`http://localhost:5501/pets/${id}`);
      return await response.json();
    } catch {
      alert("Erro ao buscar pet!");
      throw error;
    }
  },

  async editarCadastroPet(pet) {
    try {
      const response = await fetch(`http://localhost:5501/pets/${pet.id}`, {
        //ação que quero fazer nessa requisição, nesse caso é um PUT
        method: "PUT",
        //cabeçalhos da requisição
        headers: {
          "Content-Type": "application/json", // informar que o conteúdo da requisição é do tipo json
        },
        //body da requisição é o objeto JS que contém os dados
        body: JSON.stringify(pet), // converter o objeto JS para o formato json, pois é o formato que a API espera receber
      });
      return await response.json(); // fazer a conversão do formato json para o objeto JS
    } catch {
      alert("Erro ao editar pet");
      throw error;
    }
  },
};

// para usar esse objeto em outros arquivos, é necessário exportá-lo
export default api;
