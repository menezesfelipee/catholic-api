const routes = require("express").Router();
const { getAll, getById, create, update, del } = require("../controllers");
const { checkID, checkSaint, checkInput, notFound } = require("../middlewares");

// Criação das rotas passando pelos middlewares
routes.get("/saints", getAll);
routes.get("/saints/:id", checkID, checkSaint, getById);
routes.post("/saints/new", checkInput, create);
routes.put("/saints/update/:id", checkID, checkInput, update);
routes.delete("/saints/delete/:id", checkID, checkSaint, del);

// Tratamento das rotas não encontradas
routes.all("*", notFound);

module.exports = routes;
