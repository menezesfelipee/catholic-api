const { ObjectId } = require("mongodb");

const checkID = async (req, res, next) => {
  // Recebe o ID
  let { id } = req.params;

  // Verifica se é um ID válido
  try {
    id = new ObjectId(id);
  } catch (err) {
    res.status(400).send({ error: "ID inválido" });
    return;
  }

  res.id = id;

  next();
};

module.exports = checkID;
