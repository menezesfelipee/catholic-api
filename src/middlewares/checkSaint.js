const { ObjectId } = require("mongodb");
const { saints, connectDB, closeDB } = require("../database");

const checkSaint = async (req, res, next) => {
  // Tenta se conectar ao banco de dados para procurar o santo
  const id = res.id;

  try {
    await connectDB();

    const saint = await saints.findOne({ _id: ObjectId(id) });

    // Verifica se o santo existe no banco de dados
    if (!saint) {
      res.status(404).send({ message: "Santo não encontrado." });
      return;
    }
    res.saint = saint;

    await closeDB();
  } catch (err) {
    res.status(500).send({ error: err.message });
  }

  next();
};

module.exports = checkSaint;
