

const crudControllerFactory = (model) => {

    const getAll = async (req,res) => {
        const idCompany = parseInt(req?.params?.idCompany) 

        const data = await model.findMany({where:{idCompany}})

        return res.status(200).send(data)

    }

    const getById = async (req,res) => {
        const idUser = parseInt(req.params.idUser)
        const idCompany = parseInt(req?.params?.idCompany) 
        const result = await model.findMany({where: {AND:[{id:idUser},{idCompany}]}})

        return res.status(200).send(result)

    }

    const create = async (req,res) => {
        let newData;
        const idCompany = parseInt(req?.params?.idCompany) 

        if(req.body.initialDate){
            newData = {
                ...req.body,
                idCompany,
                initialDate: new Date(req?.body?.initialDate),
                finalDate: new Date(req?.body?.finalDate)   
            }
        }else{
            newData = {...req.body, idCompany}
        }

        const data = await model.create({data:newData})

        return res.status(200).send(data)

    }

    const update = async (req,res) => {
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