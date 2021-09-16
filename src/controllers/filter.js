const { saints, connectDB, closeDB } = require("../database");

const filter = async (req, res) => {
  // Recebe os parâmetos para filtrar
  const { name, type, day, month } = req.query;

  // Cria um objeto de query e coloca as chaves apenas se elas existirem
  const query = new Object();
  if (name) query["name"] = { $regex: name, $options: "i" };
  if (type) query["type"] = { $regex: `${type}`, $options: "i" };
  if (day) query["day"] = { $eq: +day };
  if (month) query["month"] = { $eq: +month };

  try {
    await connectDB();

    const result = saints.find(query);

    const saintsList = new Array();
    await result.forEach((item) => saintsList.push(item));

    await closeDB();

    if (!saintsList.length)
      return res.status(404).send({ message: "Nenhum resultado encontrado." });

    return res.status(200).send(saintsList);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = filter;
