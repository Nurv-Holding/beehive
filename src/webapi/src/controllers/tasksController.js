const crudControllerFactory = require("../common/crudControllerFactory");
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

const tasksController = {
    ...crudFuctions,
    getByIdGoal
}

module.exports = tasksController