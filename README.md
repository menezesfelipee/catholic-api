# Bem-vindo à API Católica

![Museus do Vaticano](https://wallpaperaccess.com/full/637049.jpg)

> API RESTful desenvolvida como forma de avaliação de conhecimentos no Módulo 3: Backend com NodeJS, pela Blue EdTech.

Essa é uma interface que fornece dados para aplicações voltadas ao Catolicismo. Aqui você terá disponível um CRUD completo para obter informações a respeitos dos Santos, datas importantes, livros, orações, e tudo que você puder imaginar sobre o Mundo Católico.

*Nesse estágio de desenvolvimento, encontra-se disponível apenas informações sobre os Santos da Igreja.*

## Pré-requisitos

> Você precisará ter instaladas as seguintes ferramentas para executar o projeto:

* [NodeJS](https://nodejs.org/en/download/)
* [MongoDB](https://www.mongodb.com/try/download/community)

## Configurando

1. Clone o repositório:

```bash
git clone https://github.com/menezesfelipee/catholic-api.git
```

2. Abra o terminal na pasta clonada e execute:

```bash
npm i
```

_Com isso, todas as dependências do projeto serão instaladas._

3. Crie um arquivo `.env` que deve ser configurado de acordo com as informações do arquivo `.env.exemple`. Para execução local, configure-o da seguinte maneira (apenas recomendável):

```env
DB_URL=mongodb://localhost:27017
DB_NAME=Catholic-API
```

## Executando o projeto

Agora com tudo configurado, para executar pode-se fazer de duas maneiras:

* Com o próprio node:

```bash
npm start
```

* Com o nodemon:

```bash
npm run dev
```

## Testando a API

> Agora você tem acesso a um CRUD completo a respeito dos Santos Católicos para usar em sua aplicações. Para acessar, basta acessar `http://localhost:3000/<rota>`

_Segue a lista de rotas:_

* **GET (Listar)**
  * **Listar todos santos:** `/saints`
  * **Mostrar um santo pelo ID:** `/saints/<id>`

* **POST (Criar)**
  * **Necessário enviar um JSON junto à requisição:** `/saints/new`

* **PUT (Atualizar)**
  * **Necessário enviar um JSON junto à requisição:** `/saints/update/<id>`

* **DELETE (Excluir)**
  * **Irreversível, tenha cuidado:** `/saints/delete/<id>`

_Caso queira fazer uma pesquisa com filtros, siga o modelo abaixo:_

* <http://localhost:3000/filter?name=Francisco&type=memoria&day=4&month=10>

> Cada um dos campos `name`, `type`, `day` e `month` é completamente opcional. Caso não queria utilizá-los como filtro, basta omití-los.

_Para realizar as requisições, recomendamos alguma da ferramentas abaixo:_

* [Postman](https://www.postman.com/downloads/)
* [Insomnia](https://insomnia.rest/download)
* [Thunder Client (plugin no VSCode)](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

## Modelo de JSON para POST e PUT

_Segue abaixo um modelo de JSON para ser enviado junto às requisições POST e PUT. Todos os JSONS devem ter **no mínimo** os campos presentes nesse JSON modelo._

```json
{
    "name": "Santa Isabel da Hungria",
    "type": "Memória Facultativa",
    "day": 17,
    "month": 11,
    "img": "https://anamariabrandolini.files.wordpress.com/2019/08/catalina-de-alejandrc3ada-de-zurbarc3a1n.jpg"
}
```

## Contribua

Contribuições, problemas e pedidos de novas funcionalidades são bem-vindos. <br>
Sinta-se livre para checar a página de [issues](https://github.com/menezesfelipee/catholic-api/issues) para nos informar de algum bug. <br><br>
_Para contribuir:_
1. Faça um fork do repositório oficial para a sua máquina.
2. Trabalhe na sua contribuição.
3. Faça um pull request para o repositório oficial do projeto.

## Autor

**:pouting_man: Felipe Menezes**

<a href = 'https://www.linkedin.com/in/felipe-menezes-'> <img width = '35px' align= 'center' src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/linked-in-alt.svg"/></a>
<a href = 'https://www.github.com/menezesfelipee'> <img width = '35px' align= 'center' src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/github.svg"/></a>
<a href = 'https://www.instagram.com/menezesfelipee'> <img width = '35px' align= 'center' src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/instagram.svg"/></a>

## Licença

Esse projeto está sob a licença [MPL 2.0](https://github.com/menezesfelipee/catholic-api/blob/main/LICENSE).

