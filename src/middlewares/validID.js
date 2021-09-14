const { ObjectId } = require("mongodb");
const { saints, connectDB, closeDB } = require("../database")

const checkID = async (req, res, next) => {
    // Recebe o ID
    let { id } = req.params;

    // Verifica se é um ID válido
    try {
        id = new ObjectId(id);
        
    } catch (err) {
        res.status(400).send({ error: "ID inválido" });
        return;
    };

    res.id = id;

    next();
}

const checkSaint = async (req, res, next) => {
    // Tenta se conectar ao banco de dados para procurar o santo
    const id = res.id;

    try {
        await connectDB()

        const saint = await saints.findOne({ _id: ObjectId(id) });

        // Verifica se o santo existe no banco de dados
        if (!saint) {
            res.status(404).send({ message: "Santo não encontrado." });
            return;
        }
        res.saint = saint;

        await closeDB();

    } catch (err) {
        res.status(500).send({ error: err.message});
    };

    next();
}

const checkInput = (req, res, next) => {
    // Recebe as informações passadas pelo usuário
    const { name, type, day, month } = req.body;

    // Verifica se todos os campos foram preenchidos
    if (!name || !type || !day || !month) {
        res.status(400).send({ error: "Campos preenchidos incorretamente."});
        return;
    };

    res.input = req.body;

    next();
}

module.exports = {
    checkID,
    checkSaint,
    checkInput,
}