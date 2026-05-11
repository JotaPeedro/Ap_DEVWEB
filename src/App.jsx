import React, { useState } from "react";

//Livro

function LivroCard({
  livro,
  editarLivro,
  excluirLivro,
  devolverLivro,
  usuarios
}) {

  // procura usuário que pegou o livro
  const usuarioEmprestimo = usuarios.find(
    (usuario) =>
      usuario.id === livro.emprestadoPara
  );

  return (

    <div className="bg-white p-4 rounded-lg shadow border">

      {/* TÍTULO */}

      <h2 className="text-xl font-bold mb-2">
        {livro.titulo}
      </h2>

      {/* DADOS */}

      <p>
        <span className="font-semibold">
          Autor:
        </span>{" "}
        {livro.autor}
      </p>

      <p>
        <span className="font-semibold">
          Categoria:
        </span>{" "}
        {livro.categoria}
      </p>

      {/* STATUS */}

      <p
        className={`mt-2 font-bold ${
          livro.disponivel
            ? "text-green-600"
            : "text-red-600"
        }`}
      >

        {livro.disponivel
          ? "Disponível"
          : "Emprestado"}

      </p>

      {/* MOSTRA USUÁRIO */}

      {!livro.disponivel && usuarioEmprestimo && (

        <p className="mt-2 text-sm text-gray-700">

          Emprestado para:
          {" "}
          <span className="font-semibold">
            {usuarioEmprestimo.nome}
          </span>

        </p>

      )}

      {/* BOTÕES */}

      <div className="flex gap-2 mt-4 flex-wrap">

        {/* EDITAR */}

        <button
          onClick={() => editarLivro(livro)}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Editar
        </button>

        {/* EXCLUIR */}

        <button
          onClick={() =>
            excluirLivro(livro.id)
          }
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Excluir
        </button>

        {/* DEVOLVER */}

        {!livro.disponivel && (

          <button
            onClick={() =>
              devolverLivro(livro.id)
            }
            className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800"
          >
            Devolver
          </button>

        )}

      </div>

    </div>
  );
}

/* ==================================================
   COMPONENTE USUÁRIO
================================================== */

function UsuarioCard({ usuario }) {

  return (

    <div className="bg-white p-4 rounded-lg shadow border">

      <h2 className="text-xl font-bold mb-2">
        {usuario.nome}
      </h2>

      <p>
        <span className="font-semibold">
          Email:
        </span>{" "}
        {usuario.email}
      </p>

      <p>
        <span className="font-semibold">
          Matrícula:
        </span>{" "}
        {usuario.matricula}
      </p>

      <p>
        <span className="font-semibold">
          Livros emprestados:
        </span>{" "}
        {usuario.livrosEmprestados}
      </p>

    </div>
  );
}

/* ==================================================
   APP PRINCIPAL
================================================== */

export default function App() {

  /* ==================================================
     STATE DOS LIVROS
  ================================================== */

  const [livros, setLivros] = useState([

    {
      id: 1,
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      categoria: "Literatura",
      disponivel: true,
      emprestadoPara: null
    },

    {
      id: 2,
      titulo: "Clean Code",
      autor: "Robert Martin",
      categoria: "Programação",
      disponivel: false,
      emprestadoPara: 1
    },

    {
      id: 3,
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R Tolkien",
      categoria: "Fantasia",
      disponivel: true,
      emprestadoPara: null
    }

  ]);

  /* ==================================================
     STATE DOS USUÁRIOS
  ================================================== */

  const [usuarios, setUsuarios] =
    useState([

      {
        id: 1,
        nome: "João Pedro",
        email: "joao@email.com",
        matricula: "2023001",
        livrosEmprestados: 1
      },

      {
        id: 2,
        nome: "Maria Oliveira",
        email: "maria@email.com",
        matricula: "2023002",
        livrosEmprestados: 0
      },

      {
        id: 3,
        nome: "Carlos Henrique",
        email: "carlos@email.com",
        matricula: "2023003",
        livrosEmprestados: 0
      }

    ]);

  /* ==================================================
     STATES DO FORMULÁRIO
  ================================================== */

  const [titulo, setTitulo] =
    useState("");

  const [autor, setAutor] =
    useState("");

  const [categoria, setCategoria] =
    useState("Programação");

  const [mensagem, setMensagem] =
    useState("");

  /* ==================================================
     CONTROLE DE EDIÇÃO
  ================================================== */

  const [livroEditando,
    setLivroEditando] =
    useState(null);

  /* ==================================================
     STATES DO EMPRÉSTIMO
  ================================================== */

  const [usuarioSelecionado,
    setUsuarioSelecionado] =
    useState("");

  const [livroSelecionado,
    setLivroSelecionado] =
    useState("");

  /* ==================================================
     CADASTRO / EDIÇÃO
  ================================================== */

  function salvarLivro(event) {

    event.preventDefault();

    /* ======================================
       EDIÇÃO
    ====================================== */

    if (livroEditando) {

      const livrosAtualizados =
        livros.map((livro) => {

          if (
            livro.id === livroEditando.id
          ) {

            return {

              ...livro,

              titulo: titulo,

              autor: autor,

              categoria: categoria
            };
          }

          return livro;
        });

      setLivros(livrosAtualizados);

      setMensagem(
        "Livro atualizado com sucesso!"
      );

      setLivroEditando(null);
    }

    /* ======================================
       CADASTRO
    ====================================== */

    else {

      const novoLivro = {

        id: livros.length + 1,

        titulo: titulo,

        autor: autor,

        categoria: categoria,

        disponivel: true,

        emprestadoPara: null
      };

      setLivros([
        ...livros,
        novoLivro
      ]);

      setMensagem(
        "Livro cadastrado com sucesso!"
      );
    }

    /* ======================================
       LIMPA FORMULÁRIO
    ====================================== */

    setTitulo("");

    setAutor("");

    setCategoria("Programação");
  }

  /* ==================================================
     EXCLUIR LIVRO
  ================================================== */

  function excluirLivro(id) {

    const novaLista =
      livros.filter(
        (livro) =>
          livro.id !== id
      );

    setLivros(novaLista);

    setMensagem(
      "Livro removido com sucesso!"
    );
  }

  /* ==================================================
     EDITAR LIVRO
  ================================================== */

  function editarLivro(livro) {

    setTitulo(livro.titulo);

    setAutor(livro.autor);

    setCategoria(livro.categoria);

    setLivroEditando(livro);

    setMensagem(
      "Editando livro..."
    );
  }

  /* ==================================================
     EMPRÉSTIMO
  ================================================== */

  function emprestarLivro(event) {

    event.preventDefault();

    /* ======================================
       ATUALIZA LIVROS
    ====================================== */

    const livrosAtualizados =
      livros.map((livro) => {

        if (
          livro.id ===
          Number(livroSelecionado)
        ) {

          return {

            ...livro,

            disponivel: false,

            emprestadoPara:
              Number(
                usuarioSelecionado
              )
          };
        }

        return livro;
      });

    setLivros(livrosAtualizados);

    /* ======================================
       ATUALIZA USUÁRIOS
    ====================================== */

    const usuariosAtualizados =
      usuarios.map((usuario) => {

        if (
          usuario.id ===
          Number(usuarioSelecionado)
        ) {

          return {

            ...usuario,

            livrosEmprestados:
              usuario.livrosEmprestados + 1
          };
        }

        return usuario;
      });

    setUsuarios(usuariosAtualizados);

    setMensagem(
      "Livro emprestado com sucesso!"
    );

    /* ======================================
       LIMPA SELECTS
    ====================================== */

    setUsuarioSelecionado("");

    setLivroSelecionado("");
  }

  /* ==================================================
     DEVOLUÇÃO
  ================================================== */

  function devolverLivro(idLivro) {

    // procura livro
    const livroDevolvido =
      livros.find(
        (livro) =>
          livro.id === idLivro
      );

    /* ======================================
       ATUALIZA LIVROS
    ====================================== */

    const livrosAtualizados =
      livros.map((livro) => {

        if (livro.id === idLivro) {

          return {

            ...livro,

            disponivel: true,

            emprestadoPara: null
          };
        }

        return livro;
      });

    setLivros(livrosAtualizados);

    /* ======================================
       ATUALIZA USUÁRIO
    ====================================== */

    const usuariosAtualizados =
      usuarios.map((usuario) => {

        if (
          usuario.id ===
          livroDevolvido.emprestadoPara
        ) {

          return {

            ...usuario,

            livrosEmprestados:
              usuario.livrosEmprestados - 1
          };
        }

        return usuario;
      });

    setUsuarios(usuariosAtualizados);

    setMensagem(
      "Livro devolvido com sucesso!"
    );
  }

  /* ==================================================
     INTERFACE
  ================================================== */

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      {/* TÍTULO */}

      <h1 className="text-4xl font-bold text-center mb-10">
        Sistema da Biblioteca
      </h1>

      {/* ==================================================
          FORMULÁRIO DE LIVROS
      ================================================== */}

      <section className="bg-white p-6 rounded-lg shadow mb-10">

        <h2 className="text-2xl font-bold mb-4">

          {livroEditando
            ? "Editar Livro"
            : "Cadastro de Livros"}

        </h2>

        <form
          onSubmit={salvarLivro}
          className="space-y-4"
        >

          {/* TÍTULO */}

          <div>

            <label className="block mb-1 font-semibold">
              Título
            </label>

            <input
              type="text"
              value={titulo}
              onChange={(e) =>
                setTitulo(
                  e.target.value
                )
              }
              className="w-full border p-2 rounded"
              required
            />

          </div>

          {/* AUTOR */}

          <div>

            <label className="block mb-1 font-semibold">
              Autor
            </label>

            <input
              type="text"
              value={autor}
              onChange={(e) =>
                setAutor(
                  e.target.value
                )
              }
              className="w-full border p-2 rounded"
              required
            />

          </div>

          {/* CATEGORIA */}

          <div>

            <label className="block mb-1 font-semibold">
              Categoria
            </label>

            <select
              value={categoria}
              onChange={(e) =>
                setCategoria(
                  e.target.value
                )
              }
              className="w-full border p-2 rounded"
            >

              <option>
                Programação
              </option>

              <option>
                Literatura
              </option>

              <option>
                Fantasia
              </option>

              <option>
                Computação
              </option>

            </select>

          </div>

          {/* BOTÃO */}

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >

            {livroEditando
              ? "Salvar Alterações"
              : "Cadastrar Livro"}

          </button>

        </form>

      </section>

      {/* ==================================================
          FORMULÁRIO DE EMPRÉSTIMO
      ================================================== */}

      <section className="bg-white p-6 rounded-lg shadow mb-10">

        <h2 className="text-2xl font-bold mb-4">
          Empréstimo de Livros
        </h2>

        <form
          onSubmit={emprestarLivro}
          className="space-y-4"
        >

          {/* USUÁRIO */}

          <div>

            <label className="block mb-1 font-semibold">
              Usuário
            </label>

            <select
              value={usuarioSelecionado}
              onChange={(e) =>
                setUsuarioSelecionado(
                  e.target.value
                )
              }
              className="w-full border p-2 rounded"
              required
            >

              <option value="">
                Selecione um usuário
              </option>

              {usuarios.map((usuario) => (

                <option
                  key={usuario.id}
                  value={usuario.id}
                >

                  {usuario.nome}

                </option>

              ))}

            </select>

          </div>

          {/* LIVRO */}

          <div>

            <label className="block mb-1 font-semibold">
              Livro
            </label>

            <select
              value={livroSelecionado}
              onChange={(e) =>
                setLivroSelecionado(
                  e.target.value
                )
              }
              className="w-full border p-2 rounded"
              required
            >

              <option value="">
                Selecione um livro
              </option>

              {livros
                .filter(
                  (livro) =>
                    livro.disponivel
                )
                .map((livro) => (

                  <option
                    key={livro.id}
                    value={livro.id}
                  >

                    {livro.titulo}

                  </option>

              ))}

            </select>

          </div>

          {/* BOTÃO */}

          <button
            type="submit"
            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
          >
            Realizar Empréstimo
          </button>

        </form>

      </section>

      {/* FEEDBACK */}

      {mensagem && (

        <div className="mb-6">

          <p className="text-green-700 font-bold">
            {mensagem}
          </p>

        </div>

      )}

      {/* ==================================================
          LISTA DE LIVROS
      ================================================== */}

      <section className="mb-10">

        <h2 className="text-2xl font-bold mb-4">
          Gerenciamento de Livros
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {livros.map((livro) => (

            <LivroCard
              key={livro.id}
              livro={livro}
              editarLivro={editarLivro}
              excluirLivro={excluirLivro}
              devolverLivro={devolverLivro}
              usuarios={usuarios}
            />

          ))}

        </div>

      </section>

      {/* ==================================================
          LISTA DE USUÁRIOS
      ================================================== */}

      <section>

        <h2 className="text-2xl font-bold mb-4">
          Gerenciamento de Usuários
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {usuarios.map((usuario) => (

            <UsuarioCard
              key={usuario.id}
              usuario={usuario}
            />

          ))}

        </div>

      </section>

    </div>
  );
}