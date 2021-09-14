require("dotenv").config();
const { client } = require("./connection");

module.exports = client.db(process.env.DB_NAME).collection("saints");
