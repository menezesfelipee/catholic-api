const getById = async (req, res) => {
    // Recebe o objeto do santo já validado pelos middlewares
    const saint = res.saint;

    return res.status(200).send(saint);
}

module.exports = getById;