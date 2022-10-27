

const crudControllerFactory = (model) => {

    const getAll = async (req,res) => {
        const data = await model.findMany()

        return res.status(200).send(data)

    }

    return {
        getAll
    }
}

module.exports = crudControllerFactory