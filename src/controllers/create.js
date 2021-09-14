const { ObjectId } = require('mongodb');
const { saints, connectDB, closeDB } = require('../database');

const create = async (req, res) => {
    // Recebe o input já validado pelos middlewares
    const input = res.input;

    await connectDB();
    let saint = await saints.insertOne(input);
    saint = await saints.findOne({ _id: ObjectId(saint.insertedId) });
    await closeDB();

    return res.status(201).send(saint);
};

module.exports = create;