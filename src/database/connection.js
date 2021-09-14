require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connectDB = async (next) => {
  try {
    await client.connect();
  } catch (err) {
    return console.error("Não foi possível conectar ao servidor.");
  }

  console.log("Conectado ao Atlas com sucesso!");
};

const closeDB = async () => {
  try {
    await client.close();
  } catch {
    console.error("Ocorreu um erro.");
  }

  console.log("Desconectado.");
};

module.exports = {
  client,
  connectDB,
  closeDB,
};
