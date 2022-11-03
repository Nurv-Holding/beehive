const formatDate = require("./formateDate");


const crudControllerFactory = (model) => {

    const getAll = async (req,res) => {
        let data;

        if(req.params.idCompany){
            const idCompany = parseInt(req?.params?.idCompany) 

            data = await model.findMany({where:{idCompany}})
        }else{
            data = await model.findMany()
        }
  
        return res.status(200).send(data)

    }

    const getById = async (req,res) => {
        let data;
        const id = parseInt(req.params.id)

        if(req.params.idCompany){
            const idCompany = parseInt(req?.params?.idCompany) 
            data = await model.findMany({where: {AND:[{id},{idCompany}]}})

        }else{
            data = await model.findUnique({ where: {id} })
        }
  

        return res.status(200).send(data)

    }

    const create = async (req,res) => {
        let newData;
        const idCompany = parseInt(req?.params?.idCompany) 

        if(req.body.initialDate){
            if(idCompany)
                newData = {
                    ...req.body,
                    idCompany,
                    initialDate: formatDate(req?.body?.initialDate),
                    finalDate: formatDate(req?.body?.finalDate)   
                }

            else
                newData = {
                    ...req.body,
                    initialDate: formatDate(req?.body?.initialDate),
                    finalDate: formatDate(req?.body?.finalDate)   
                }
            
        }else{
            if(idCompany)
                newData = {...req.body, idCompany}
            else
                newData = req.body
        }

        console.log("newData",newData)

        const data = await model.create({data:newData})

        return res.status(200).send(data)

    }

    const update = async (req,res) => {
        let newDate;
        const id = parseInt(req.params.id) 

        if(req.body.initialDate){
            newDate = {
                ...req.body,
                initialDate: formatDate(req?.body?.initialDate),
                finalDate: formatDate(req?.body?.finalDate) 
            }
        }else{
            newDate = req.body
        }

        console.log("newDate", newDate)

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