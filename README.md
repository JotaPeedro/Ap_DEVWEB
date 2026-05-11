# Sistema de Gerenciamento de Biblioteca

## Descrição

O código implementa um sistema de gerenciamento de biblioteca com o objetivo de facilitar a organização dos livros, além de permitir o controle de empréstimos e devoluções.

O sistema possui dois principais tipos de usuários:

- Bibliotecário
- Usuários da biblioteca

As principais entidades do sistema são:

- Livros
- Usuários

---

# Estrutura dos livros

```js
{
  id: 1,
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  categoria: "Literatura Brasileira",
  anoPublicacao: 1899,
  disponivel: true
}
```

## Campos

| Campo | Tipo | Descrição |
|---|---|---|
| id | number | Identificador único do livro |
| titulo | string | Nome do livro |
| autor | string | Autor do livro |
| categoria | string | Categoria ou gênero do livro |
| anoPublicacao | number | Ano de publicação |
| disponivel | boolean | Informa se o livro está disponível |

---

# Estrutura dos usuários

```js
{
  id: 1,
  nome: "João Pedro Cavani",
  email: "joao@email.com",
  matricula: "2023001",
  livrosEmprestados: 2
}
```

## Campos

| Campo | Tipo | Descrição |
|---|---|---|
| id | number | Identificador único do usuário |
| nome | string | Nome completo do usuário |
| email | string | Email do usuário |
| matricula | string | Número de matrícula |
| livrosEmprestados | number | Quantidade de livros emprestados |

---

# Dados iniciais

## Livros

```js
const livros = [
  {
    id: 1,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    categoria: "Literatura Brasileira",
    anoPublicacao: 1899,
    disponivel: true
  },

  {
    id: 2,
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    categoria: "Programação",
    anoPublicacao: 2008,
    disponivel: false
  },

  {
    id: 3,
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    categoria: "Fantasia",
    anoPublicacao: 1954,
    disponivel: true
  },

  {
    id: 4,
    titulo: "Algoritmos: Teoria e Prática",
    autor: "Thomas H. Cormen",
    categoria: "Computação",
    anoPublicacao: 2009,
    disponivel: true
  }
];
```

---

## Usuários

```js
const usuarios = [
  {
    id: 1,
    nome: "João Pedro Cavani",
    email: "joao.cavani@email.com",
    matricula: "20231001",
    livrosEmprestados: 1
  },

  {
    id: 2,
    nome: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    matricula: "20231002",
    livrosEmprestados: 0
  },

  {
    id: 3,
    nome: "Carlos Henrique",
    email: "carlos.h@email.com",
    matricula: "20231003",
    livrosEmprestados: 2
  },

  {
    id: 4,
    nome: "Fernanda Souza",
    email: "fernanda.s@email.com",
    matricula: "20231004",
    livrosEmprestados: 1
  }
];
```

---

# Funcionalidades do sistema

O sistema permite:

- Cadastro de livros
- Edição de livros
- Exclusão de livros
- Listagem de livros
- Cadastro de usuários
- Controle de empréstimos
- Controle de devoluções
- Verificação de disponibilidade dos livros

---

# Tecnologias utilizadas

- React
- JavaScript
- Tailwind CSS

---

# Objetivo do projeto

O objetivo do projeto é simular um sistema simples de gerenciamento de biblioteca utilizando React, aplicando conceitos como:

- Componentização
- Estados com useState
- Manipulação de arrays
- Renderização dinâmica
- Gerenciamento de formulários
- Controle de empréstimos
