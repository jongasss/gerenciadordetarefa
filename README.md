# Gerenciador de Tarefas Pessoais

## Estrutura do Projeto

Este projeto consiste em um backend em Node.js com Express e MySQL e um frontend em React Native usando Expo.

### Backend

A pasta `backend/` contém a API que gerencia as tarefas.

### Frontend

A pasta `frontend/` contém a aplicação que consome a API e exibe as tarefas.

## Instruções de Inicialização

### Backend
1. Navegue até a pasta `backend/`.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o banco de dados no arquivo `config/db.js`.
4. Inicie o servidor:
   ```bash
   node server.js
   ```

### Frontend
1. Navegue até a pasta `frontend/`.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie a aplicação:
   ```bash
   expo start
   ```

## Funcionalidades
- Criar, listar, atualizar e excluir tarefas.
- Marcar tarefas como concluídas.
