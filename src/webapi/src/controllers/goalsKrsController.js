const crudControllerFactory = require("../common/crudControllerFactory");
const handlerBuilder = require("../common/handlerBuilder");
const { prismaClient } = require("../database/prismaClient");

const crudFunctions = crudControllerFactory(prismaClient.goalKr)

const findByName = handlerBuilder(async (req, res) => {
    const {name} = req.params
    const idCompany = parseInt(req.params.idCompany)

    const result = await prismaClient.goalKr.findMany({where:{ AND:[{ name }, { idCompany }] }})

    const kr = result.length !== 0? result[0]: null

    res.status(200).send(kr)
})

const goalsKrsController = {
    ...crudFunctions,
    findByName
}

module.exports = goalsKrsController