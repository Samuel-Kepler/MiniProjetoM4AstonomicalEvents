# API de Eventos Astronômicos

Esta API fornece informações sobre eventos astronômicos, incluindo chuvas de meteoros, eclipses solares e lunares. Você pode buscar eventos por nome, ano, ou próximos eventos. Além disso, é possível adicionar, atualizar e deletar eventos.

## Estrutura do Projeto

```
/MiniProjetoM4AstonomicalEvents
|-- /src
|   |-- /controllers
|   |   |-- addEvent.controller.js
|   |   |-- deleteEvent.controller.js
|   |   |-- getAllEvents.controller.js
|   |   |-- getEventById.controller.js
|   |   |-- getEventsByName.controller.js
|   |   |-- getEventsByYear.controller.js
|   |   |-- getUpcoming.controllerEvents.js
|   |   |-- updateEvent.controller.js
|   |-- /routes
|   |   |-- event.routes.js
|   |-- /database
|   |   |-- eventDatabase.js
|   |-- /models
|   |   |-- event.model.js
|   |-- app.js
|-- package.json
```

## Estrutura dos Arquivos

- **/src/controllers**: Contém os controladores que manipulam as requisições.
- **/src/routes**: Define as rotas da API.
- **/src/database**: Contém a base de dados de eventos.
- **/src/models**: Define o modelo de dados dos eventos.
- **app.js**: Configurações do servidor Express.


## Endpoints

### GET /event/all

Retorna todos os eventos astronômicos.

**Exemplo de requisição:**

```
GET http://localhost:3000/event/all
```

### GET /event/:id

Retorna detalhes de um evento específico pelo ID.

**Exemplo de requisição:**

```
GET http://localhost:3000/event/1
```

### GET /next

Retorna todos os eventos futuros.

**Exemplo de requisição:**

```
GET http://localhost:3000/next
```

### GET /event/year/:year

Retorna todos os eventos para um ano específico.

**Exemplo de requisição:**

```
GET http://localhost:3000/event/year/2023
```

### GET /event/name/:name

Retorna todos os eventos que contêm o nome especificado.

**Exemplo de requisição:**

```
GET http://localhost:3000/event/name/Eclipse
```

### POST /event

Adiciona um novo evento.

**Exemplo de requisição:**

```
POST http://localhost:3000/event
Content-Type: application/json

{
    "name": "Eclipse Solar Parcial",
    "date": "2025-04-25",
    "location": "Ásia, Europa"
}
```

### DELETE /event/:id

Deleta um evento pelo ID.

**Exemplo de requisição:**

```
DELETE http://localhost:3000/event/1
```

### PUT /event/:id

Atualiza um evento existente pelo ID.

**Exemplo de requisição:**

```
PUT http://localhost:3000/event/1
Content-Type: application/json

{
    "name": "Eclipse Solar Parcial Atualizado",
    "date": "2025-04-25",
    "location": "Ásia, Europa"
}
```

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/MiniProjetoM4AstonomicalEvents.git
cd MiniProjetoM4AstonomicalEvents
npm install
```

## Execução

Inicie o servidor:

```bash
npm start
```

A API estará disponível em `http://localhost:3000`.



## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

