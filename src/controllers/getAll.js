const { saints, connectDB, closeDB } = require("../database");

const getAll = async (req, res) => {
    await connectDB();
    const saintsList = await saints.find({}).toArray();
    await closeDB();

    return res.send(saintsList);
};

module.exports = getAll;