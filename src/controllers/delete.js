const { ObjectId } = require('mongodb');
const { saints, connectDB, closeDB } = require('../database')

const del = async (req, res) => {
    // Recebe o id do santo já validado pelos middlewares
    const { _id } = res.saint;

    // Deleta o santo pelo ID
    await connectDB();
    const saint = await saints.findOneAndDelete({ _id: ObjectId(_id) });
    await closeDB();

    return res.status(200).send({ message: `${saint.value.name} foi excluído com sucesso!` });
};

module.exports = del