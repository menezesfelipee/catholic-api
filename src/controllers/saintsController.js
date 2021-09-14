const { connectDB, closeDB, saints } = require("../database");
const { ObjectId } = require("mongodb");

const getAll = async (req, res) => {
    await connectDB();
    const saintsList = await saints.find({}).toArray();
    await closeDB();

    return res.send(saintsList);
};

const getById = async (req, res) => {
    // Recebe o objeto do santo já validado pelos middlewares
    const saint = res.saint;

    return res.status(200).send(saint);
}

const create = async (req, res) => {
    // Recebe o input já validado pelos middlewares
    const input = res.input;

    await connectDB();
    let saint = await saints.insertOne(input);
    saint = await saints.findOne({ _id: ObjectId(saint.insertedId) });
    await closeDB();

    return res.status(201).send(saint);
};

const update = async (req, res) => {
    // Recebe o id da requisição
    const { id } = req.params;

    // Recebe o input já validado pelos middlewares
    const input = res.input;

    // Finalmente faz a atualização retornando o objeto
    await connectDB();
    let saint = await saints.updateOne({ _id: ObjectId(id) }, { $set: input });
    saint = await saints.findOne({ _id: ObjectId(id) });
    await closeDB();

    return res.status(200).send(saint);
}

const del = async (req, res) => {
    // Recebe o id do santo já validado pelos middlewares
    const { _id } = res.saint;

    // Deleta o santo pelo ID
    await connectDB();
    const saint = await saints.findOneAndDelete({ _id: ObjectId(_id) });
    await closeDB();

    return res.status(200).send({ message: `${saint.value.name} foi excluído com sucesso!` });
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    del
}