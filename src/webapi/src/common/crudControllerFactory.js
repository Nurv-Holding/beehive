

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
        let newDate;

        if(req.body.initialDate){
            newDate = {
                ...req.body,
                initialDate: new Date(req?.body?.initialDate),
                finalDate: new Date(req?.body?.finalDate)   
            }
        }else{
            newDate = req.body
        }

        const data = await model.create({data:newDate})

        return res.status(200).send(data)

    }

    const update = async (req,res) => {
        const id = parseInt(req.params.id) 
        let newDate;

        if(req.body.initialDate){
            newDate = {
                ...req.body,
                initialDate: new Date(req?.body?.initialDate),
                finalDate: new Date(req?.body?.finalDate)  
            }
        }else{
            newDate = req.body
        }

        const result = await model.update({where:{id}, data:newDate})

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