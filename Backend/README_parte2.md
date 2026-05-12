# Endpoints implementados

## POST

### `/login`
- **Descrição:** Realiza a autenticação do usuário administrador.
- **Acesso:** Público.
- **Justificativa:** O endpoint precisa ser público para permitir o login no sistema.

### `/livros`
- **Descrição:** Realiza o cadastro de um novo livro.
- **Acesso:** Protegido.
- **Justificativa:** Apenas usuários autenticados como administradores podem cadastrar livros, evitando a inclusão de informações incorretas ou livros inexistentes no sistema.

### `/usuarios`
- **Descrição:** Realiza o cadastro de novos usuários.
- **Acesso:** Protegido.
- **Justificativa:** Impede que usuários não autorizados criem contas arbitrariamente, mantendo a segurança e a integridade do sistema.

### `/emprestimos`
- **Descrição:** Realiza o empréstimo de um livro para um usuário.
- **Acesso:** Protegido.
- **Justificativa:** O controle de empréstimos deve ser realizado apenas por usuários autenticados para garantir a organização e o controle do acervo.

---

## PUT

### `/emprestimos/{id}`
- **Descrição:** Realiza a devolução de um livro emprestado.
- **Acesso:** Protegido.
- **Justificativa:** Apenas usuários autenticados podem registrar devoluções, garantindo o controle correto dos livros emprestados.

---

## GET

### `/usuarios`
- **Descrição:** Lista os usuários cadastrados.
- **Acesso:** Protegido.
- **Justificativa:** Os dados dos usuários não devem ficar acessíveis publicamente, preservando a privacidade das informações.

### `/livros`
- **Descrição:** Lista os livros disponíveis no sistema.
- **Acesso:** Público.
- **Justificativa:** O endpoint é público para permitir que qualquer usuário consulte os livros disponíveis.

---

# Relação entre os modelos da API e os dados mockados do Front-End

Os dados mockados do front-end representam as informações necessárias para simular o funcionamento do sistema, incluindo usuários, livros e empréstimos.

Os modelos utilizados na API seguem a mesma estrutura base dos objetos JSON mockados, mantendo compatibilidade entre front-end e back-end.

## Campos coincidentes

Os seguintes campos presentes nos JSONs mockados também estão presentes nos modelos da API:

### Livro
- `titulo`
- `autor`
- `categoria`
- `ano`

### Usuário
- `nome`
- `username`
- `senha`

### Empréstimo
- `id_usuario`
- `id_livro`
- `data_emprestimo`

### Usuário
- `id`
- `tipo_usuario`

### Empréstimo
- `data_devolucao`
- `status`
