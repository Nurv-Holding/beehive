

const crudControllerFactory = (model) => {

    const getAll = async (req,res) => {
        const data = await model.findMany()

        return res.status(200).send(data)

    }

    const getById = async (req,res) => {
        const id = parseInt(req.params.id) 
        const result = await model.findUnique({where:{id}})

        return res.status(200).send(result)

    }

    const create = async (req,res) => {
        const data = await model.create({data:req.body})

        return res.status(200).send(data)

    }

    const update = async (req,res) => {
        const id = parseInt(req.params.id) 
        const data = req.body
        const result = await model.update({where:{id}, data})

        return res.status(200).send(result)

    }

    const remove = async (req,res) => {
        const id = parseInt(req.params.id) 
        const result = await model.delete({where:{id}})

        return res.status(200).send(result)

    }

    return {
        getAll,
        getById,
        create,
        update,
        remove
    }
}

module.exports = crudControllerFactory