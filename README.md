# 🍽️ API Restaurant

API REST desenvolvida para gerenciar mesas, sessões de atendimento e pedidos em um restaurante, com foco em organização de regras de negócio e validação de dados.

## 🚀 Objetivo

Oferecer uma API RESTful moderna, eficiente e segura para digitalizar operações de restaurantes, facilitando o controle de pedidos, gerenciamento de mesas, produtos e sessões, com foco em performance, organização e facilidade de integração.

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express.js**
- **Knex.js** (Query Builder)
- **SQLite** (pode ser adaptado para outros bancos)
- **Migrations & Seeds** para versionamento e popularização do banco

## 📚 Principais Rotas

### Produtos

- `GET /products` — Lista todos os produtos
- `GET /products/:id` — Detalha um produto
- `POST /products` — Cria um novo produto
- `PUT /products/:id` — Atualiza um produto
- `DELETE /products/:id` — Remove um produto

### Mesas

- `GET /tables` — Lista todas as mesas
- `GET /tables/:id` — Detalha uma mesa
- `POST /tables` — Cria uma nova mesa
- `PUT /tables/:id` — Atualiza uma mesa
- `DELETE /tables/:id` — Remove uma mesa

### Sessões de Mesas

- `GET /tables-sessions` — Lista sessões de mesas
- `POST /tables-sessions` — Inicia uma sessão em uma mesa
- `PATCH /tables-sessions/:id/close` — Encerra uma sessão

### Pedidos

- `GET /orders` — Lista todos os pedidos
- `GET /orders/:id` — Detalha um pedido
- `POST /orders` — Cria um novo pedido
- `PATCH /orders/:id/status` — Atualiza status do pedido
- `DELETE /orders/:id` — Remove um pedido

## 💡 Diferenciais

- Estrutura modular e escalável
- Tratamento centralizado de erros
- Migrations e seeds para fácil setup
- Código limpo e orientado a boas práticas

---

## 📝 Como testar o projeto

1. **Clone o repositório:**

   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd api-restaurant
   ```

2. **Importe o arquivo de requisições:**
   - Importe o arquivo `request_insomnia.json` no Insomnia para testar todas as rotas rapidamente.

3. **Banco de dados:**
   - O projeto utiliza **SQLite** por padrão, facilitando o setup e testes locais. O banco é criado e populado automaticamente via migrations e seeds.


