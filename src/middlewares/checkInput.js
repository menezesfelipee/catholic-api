const checkInput = (req, res, next) => {
  // Recebe as informações passadas pelo usuário
  const { name, type, day, month, img } = req.body;

  // Verifica se todos os campos foram preenchidos
  if (!name || !type || !day || !month || !img) {
    res.status(400).send({ error: "Campos preenchidos incorretamente." });
    return;
  }

  res.input = req.body;

  next();
};

module.exports = checkInput;
