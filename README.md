# 🍽️ API Restaurant

[![Node.js](https://img.shields.io/badge/Node.js-20.x-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.x-gray)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-3.x-003545?style=flat&logo=sqlite)](https://www.sqlite.org/)

API REST para gerenciamento de mesas, sessões e pedidos em restaurantes.

## ✨ Funcionalidades

- **Produtos** — Cadastro e gerenciamento do cardápio
- **Mesas** — Controle das mesas do restaurante
- **Sessões** — Abertura e fechamento de sessões por mesa
- **Pedidos** — Criação e acompanhamento de pedidos

## 🚀 Como Executar

### Pré-requisitos

- Node.js 20.x ou superior
- npm ou yarn

### Instalação

```bash
# Clone o projeto
git clone https://github.com/danillo-fullstack/api-restaurant.git
cd api-restaurant

# Instale as dependências
npm install

# Execute as migrations (cria as tabelas)
npm run knex migrate:latest

# Popule o banco com dados de exemplo
npm run knex seed:run

# Inicie o servidor
npm run dev
```

Servidor rodando em: `http://localhost:3000`

## 📦 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor em modo desenvolvimento |
| `npm run knex migrate:latest` | Executa as migrations |
| `npm run knex seed:run` | Popula o banco com dados de exemplo |

## 🔗 Endpoints

### Produtos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/products` | Lista todos os produtos |
| GET | `/products/:id` | Detalha um produto |
| POST | `/products` | Cria um novo produto |
| PUT | `/products/:id` | Atualiza um produto |
| DELETE | `/products/:id` | Remove um produto |

**Exemplo - Criar produto:**
```json
POST /products
{
  "name": "Hambúrguer Artesanal",
  "price": 29.90,
  "category": "lanches"
}
```

### Mesas

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/tables` | Lista todas as mesas |
| GET | `/tables/:id` | Detalha uma mesa |
| POST | `/tables` | Cria uma nova mesa |
| PUT | `/tables/:id` | Atualiza uma mesa |
| DELETE | `/tables/:id` | Remove uma mesa |

### Sessões de Mesa

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/tables-sessions` | Lista sessões ativas |
| POST | `/tables-sessions` | Abre uma sessão na mesa |
| PATCH | `/tables-sessions/:id/close` | Encerra uma sessão |

**Exemplo - Abrir sessão:**
```json
POST /tables-sessions
{
  "tableId": 1
}
```

### Pedidos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/orders` | Lista todos os pedidos |
| GET | `/orders/:id` | Detalha um pedido |
| POST | `/orders` | Cria um novo pedido |
| PATCH | `/orders/:id/status` | Atualiza status do pedido |
| DELETE | `/orders/:id` | Remove um pedido |

**Exemplo - Criar pedido:**
```json
POST /orders
{
  "tableSessionId": 1,
  "products": [
    { "productId": 1, "quantity": 2 },
    { "productId": 3, "quantity": 1 }
  ]
}
```

## 📂 Estrutura do Projeto

```
src/
├── controllers/      # Lógica de negócio (ação do endpoint)
├── database/         # Migrations, seeds e configuração do Knex
├── middlewares/     # Middlewares (tratamento de erros)
├── routes/          # Definição das rotas
├── utils/           # Classes utilitárias (erros personalizados)
└── server.ts        # Ponto de entrada da aplicação
```

## 🛠️ Tecnologias

- **Node.js** — Runtime JavaScript
- **TypeScript** — Superset tipado
- **Express** — Framework web
- **Knex.js** — Query builder
- **SQLite** — Banco de dados
- **Zod** — Validação de dados

---

## 📄 Licença

ISC — Danillo Caetano
