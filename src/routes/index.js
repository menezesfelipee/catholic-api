const routes = require("express").Router();
const { getAll, getById, create, update, del } = require("../controllers");
const { checkID, checkSaint, checkInput } = require("../middlewares/validID");


routes.get("/saints", getAll);
routes.get("/saints/:id", checkID, checkSaint, getById);
routes.post("/saints/new", checkInput, create);
routes.put("/saints/update/:id", checkID, checkInput, update);
routes.delete("/saints/delete/:id", checkID, checkSaint, del);

module.exports = routes;
