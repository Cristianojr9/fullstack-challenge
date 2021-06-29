# Documentação da API

## Estrutura das Pastas

```
| - src
| -- app
| --- models
| --- modules
| ---- Entidade
| ----- Controllers
| ----- Routes
| -- config
| -- database
| --- migrations
| -- app.js
| -- server.js
| -- routes.js
```

- O diretório /app possui os models da API e /modules onde pensando na escalabidade foi criada para separar os modulos da aplicação, onde ENTIDADE possui uma pasta para Controllers, Routes e futuramente conter Services, Validations.

- O diretório /config é responsável por agrupar os códigos de configuração do banco de dados, já em /database estão as migrations do projeto.

A escolha da estrutura teve como objetivo separar as responsabilidades de cada parte do sistema. Essa definição foi feita com base nos projetos já realizados e nos conhecimentos de alguns cursos.

## Principais Decisões

### Postgres

O Postgres foi meu primeiro banco de dados relacional que conheci e também o primeiro que trabalhei, escolhi pela a familiaridade e por já ter projetos a parte trabalhando junto ao Sequelize, Docker e Postgres. Com a necessidade utilizar um relacionamento entre entidades, o postgres por ser relacional foi o primeiro a vir na cabeça.

### Sequelize

Ao começar estudar NodeJs, sequelize foi o primeiro ORM NodeJs para banco de dados SQL que aprendi e escolhi justamente por já ter feitos alguns testes durante meu bootcamp. Recentemente conheci o NestJs onde também trabalha com Sequelize só que em Typescript.

### Docker

Docker foi utilizado para criar um container localmente, durante o bootcamp fui apresentado ao docker, então meu primeiro contato com o backend foi utilizando ele e é por isso que resolvi implementar no projeto também.

### Yup

Yup é um pacote de validação muito simples de trabalhar no Javascript, por conta da sua facil reutilização de código no Backend pro Frontend, resolvi utilizar ele porque poderia usar no projeto Frontend.

## API

### Profissões

#### Buscar todas as profissões

```http
  GET /profession
```

#### Buscar uma profissão

```http
  GET /profession/${id}
```

| Paramêtro | Tipo      | Descrição                     |
| :-------- | :-------- | :---------------------------- |
| `id`      | `integer` | **Required**. Id da profissão |

#### Criar uma profissão

```http
  POST /profession
```

- Corpo da requisição

```javascript
{
    "description": "description",
    "active": true,
}
```

#### Editar uma profissão

```http
  PUT /profession/${id}
```

| Paramêtro | Tipo      | Description                   |
| :-------- | :-------- | :---------------------------- |
| `id`      | `integer` | **Required**. Id da profissão |

- Corpo da requisição

```javascript
{
    "description": "description",
    "active": true,
}
```

### Profissionais

#### Buscar todos os profissionais

```http
  GET /professional
```

#### Buscar um profissional

```http
  GET /professional/${id}
```

| Paramêtro | Tipo      | Descrição                        |
| :-------- | :-------- | :------------------------------- |
| `id`      | `integer` | **Required**. Id do profissional |

#### Criar um profissional

```http
  POST /professional
```

- Corpo da requisição

```javascript
{
    "name": "name",
    "email": "email",
    "phone": "phone",
    "professionId": 1
    "active": true,
}
```

#### Editar uma profissão

```http
  PUT /professional/${id}
```

| Paramêtro | Tipo      | Description                      |
| :-------- | :-------- | :------------------------------- |
| `id`      | `integer` | **Required**. Id do profissional |

- Corpo da requisição

```javascript
{
    "name": "name",
    "email": "email",
    "phone": "phone",
    "professionId": 1
    "active": true,
}
```

## Rodando localmente

### Requisitos

- Postgres instalado
- Docker instalado

### Passo a Passo

- Crie um container no Docker

```bash
docker run --name docker -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

- Acesse o Postbird e crie um banco de dados chamado

```bash
database
```

- Instale as dependências

```bash
yarn
```

- Inicie as migrations

```bash
yarn sequelize db:migrate
```

- Inicie o projeto

```bash
yarn dev
```
