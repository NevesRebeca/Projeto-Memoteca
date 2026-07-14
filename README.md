# 📚 JavaScript: Implementando CRUD com Requisições HTTP

Este repositório reúne dois projetos desenvolvidos por mim durante a realização do curso **JavaScript: implementando CRUD com requisições HTTP**, da **Alura**.

O objetivo foi praticar a implementação de operações **CRUD**, consumo de APIs REST, manipulação do DOM e comunicação entre frontend e backend utilizando JavaScript. Além de reproduzir os conceitos apresentados nas aulas, utilizei os projetos como forma de fixação e consulta dos diferentes métodos de requisições HTTP.

## 📁 Projetos

### 🧠 Memoteca

Aplicação para cadastro e organização de pensamentos, permitindo:

- ➕ Cadastrar pensamentos;
- 📋 Listar pensamentos;
- ✏️ Editar registros;
- 🗑️ Excluir registros.

Neste projeto, as requisições HTTP foram implementadas utilizando **Axios**, seguindo a abordagem apresentada na etapa final do curso.

### 🐶 Adopet

Projeto desenvolvido em paralelo ao Memoteca como exercício de fixação dos conteúdos estudados.

A aplicação simula um sistema para cadastro de pets disponíveis para adoção, permitindo realizar as operações de CRUD. Diferentemente do Memoteca, este projeto mantém as requisições utilizando a **Fetch API**, servindo como referência para comparação entre as duas abordagens.

## 🚀 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Axios
- Node.js
- JSON Server

## 🎯 Conceitos praticados

- Operações CRUD
- Consumo de APIs REST
- Requisições HTTP com Fetch API e Axios
- Manipulação do DOM
- JavaScript assíncrono
- Backend simulado com JSON Server

## ▶️ Como executar

### 1. Instale o JSON Server

```bash
npm install -g json-server
```

### 2. Inicie o backend

Dentro da pasta `backend`:

```bash
npm start
```

A API ficará disponível em:

```
Memoteca: http://127.0.0.1:5500
Adopet: http://127.0.0.1:5501
```

### 3. Execute o frontend

Abra o projeto no Visual Studio Code e utilize a extensão **Live Server** para executar o arquivo `index.html`.

## 🎓 Créditos

Este repositório foi desenvolvido por mim como parte dos estudos realizados durante o curso **JavaScript: implementando CRUD com requisições HTTP**, da **Alura**.

Os projetos foram utilizados para praticar e consolidar os conceitos apresentados ao longo das aulas, servindo também como material de consulta para futuras implementações utilizando **Fetch API** e **Axios**.
