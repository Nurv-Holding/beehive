const BusinessError = require("./erros/BusineErros");
const handlerBuilder = require("./handlerBuilder");

const crudControllerFactory = (model) => {

    const getAll = handlerBuilder(async (req, res) => {
        let data;

        if(req.params.idCompany){
            const idCompany = parseInt(req?.params?.idCompany) 

            data = await model.findMany({where:{idCompany}})
        }else{
            data = await model.findMany()
        }
  
        return res.status(200).send(data)
    })

    const getById = handlerBuilder(async (req, res) => {
        const id = parseInt(req?.params?.id)
        let item;

        if(!id) throw new BusinessError("Id not informed")

        if(req.params.idCompany){
            const idCompany = parseInt(req?.params?.idCompany) 
            const data = await model.findMany({where: {AND:[{id},{idCompany}]}})
            item = data.length !== 0? data[0]: null

        }else{
            item = await model.findUnique({ where: {id} })
  
        }

        if(!item) throw new BusinessError("Id not exists")
  
        return res.status(200).send(item)
    })

    const create = handlerBuilder(async (req, res) => {
        let newData;
        const idCompany = parseInt(req?.params?.idCompany) 

        if(idCompany)
            newData = {...req.body, idCompany}
        else
            newData = req.body

        const data = await model.create({data:newData})

        return res.status(200).send(data)
    })

    const update = handlerBuilder(async (req, res) => {
        const id = parseInt(req?.params?.id)

        if(!id) throw new BusinessError("Id not informed")

        const data = await model.findUnique({ where: {id} })

        if(!data) throw new BusinessError("Id not exixts!")

        const result = await model.update({where:{id}, data: req?.body})

        return res.status(200).send(result)
    })

    const remove = handlerBuilder(async (req, res) => {
        const id = parseInt(req.params.id)

        if(!id) throw new BusinessError("Id not informed")

        const data = await model.findUnique({ where: {id} })

        if(!data) throw new BusinessError("Id not exixts!")

        const result = await model.delete({where:{id}})

        return res.status(200).send(result)
    })

    return {
        getAll,
        getById,
        create,
        update,
        remove
    }
}

module.exports = crudControllerFactory