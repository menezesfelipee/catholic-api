// Importações necessárias para o funcionamento do server
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { serverError } = require("./middlewares");

// Instanciando o express
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Liberando o cors
app.use(cors());
app.options("*", cors());

// Consumo das rotas
app.use(routes);

// Tratamento de erros do servidor
app.use(serverError);

// Fazendo app rodar na porta especificada
app.listen(port, () =>
  console.log(`Aplicativo rodando em http://localhost:${port}`)
);
