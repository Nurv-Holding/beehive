const crudControllerFactory = require("../common/crudControllerFactory");
const formatDate = require("../common/formateDate");
const { prismaClient } = require("../database/prismaClient");

const crudFuctions = crudControllerFactory(prismaClient.task)

const getByIdGoal = async (req, res) => {
    let data;
    const idGoal = parseInt(req.params.idGoal)

    if(req.params.idCompany){
        const idCompany = parseInt(req?.params?.idCompany) 
        data = await prismaClient.task.findMany({where: {AND:[{idGoal},{idCompany}]}})

    }else{
        data = await prismaClient.task.findUnique({ where: {idGoal} })
    }


    return res.status(200).send(data)
}

const create = async (req, res) => {

    const idCompany = parseInt(req?.params?.idCompany)
    const finalDate = formatDate(req?.body?.finalDate)
    const newData = {...req.body, idCompany, finalDate}

    console.log("newData",newData)

    try {

        const data = await prismaClient.task.create(newData)
        return res.status(200).send(data)
        
    } catch (error) {
        console.error(error)
        return res.status(200).send(error)
        
    }

}

const tasksController = {
    ...crudFuctions,
    getByIdGoal,
    create
}

module.exports = tasksController