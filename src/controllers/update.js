const { ObjectId } = require('mongodb');
const { saints, connectDB, closeDB } = require('../database');

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

module.exports = update;