const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const crudFunctions = crudControllerFactory(prismaClient.user)

const createEmployee = async (req, res) => {
    let newData;
    const idCompany = parseInt(req?.params?.idCompany) 

    if(idCompany)
        newData = {...req.body, idCompany}
    else
        newData = req.body

    const data = await prismaClient.user.create({data:{...newData, idProfile:1}})

    return res.status(200).send(data)
}

const userController = {
    ...crudFunctions,
    createEmployee
}

module.exports = userController