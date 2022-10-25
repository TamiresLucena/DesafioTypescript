<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h2 align="center">Desafio Khipo - API Produtos</h2>

  <p align="center">
    Serviço HTTP para busca de produtos.
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Tabela de conteúdos</summary>
  <ol>
    <li>
      <a href="#sobre-o-desafio">Sobre o Desafio</a>
      <ul>
        <li><a href="#tecnologias-e-recursos">Tecnologias e Recursos</a></li>
      </ul>
    </li>
    <li>
      <a href="#instrucoes-gerais">Instruções Gerais</a>
      <ul>
        <li><a href="#configuracoes-e-instalacoes">Configurações e Instalações</a></li>
      </ul>
    </li>
    <li>
      <a href="#utilizando-a-api">Utilizando a API</a></li>
      <ul>
        <li><a href="#swagger">Swagger</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## :notebook_with_decorative_cover: Sobre o Desafio

### Tecnologias e Recursos

O projeto foi criado usando as tecnologias:

- [NestJS]
  A API foi desenvolvida utilizando NestJS.

- [PostgreSQL]
  Para o banco de dados;

- [Knex]
  Como <i>query builder</i>;

- [Swagger]
  Para documentar a API;

- [Docker]
  Container para execução da API;

<!-- GETTING STARTED -->

## :book: Instruções Gerais

A seguir estão as instruções para a instalação, configuração e uso da API do projeto.

### Configurações e Instalações

1. Clonar o repositório

```sh
  git clone https://github.com/tamireslucena/DesafioTypescript.git
```

1. Entrar na pasta <i>backend</i>

```sh
  cd backend
```

2. Instalar dependências

```sh
  npm install
```

3. Subir a aplicação no Docker

```sh
  docker-compose up -d
```

4. Rodar <i>migrations</i>

```sh
  npx knex migrate:latest
```

5. Rodar <i>seeds</i>

```sh
  npx knex seed:run
```

6. Rodar API

```sh
  npm run start
```

<!-- USAGE EXAMPLES -->

## :electric_plug: Utilizando a API

### Swagger

1. Acesse: <a href="localhost:3333/api/docs">localhost:3333/api/docs</a>;

2. Os endpoints estarão todos liberados;
