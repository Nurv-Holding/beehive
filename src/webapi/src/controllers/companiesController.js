const crudControllerFactory = require("../common/crudControllerFactory");
const BusinessError = require("../common/erros/BusineErros");
const handlerBuilder = require("../common/handlerBuilder");
const { prismaClient } = require("../database/prismaClient");

const crudFunctions = crudControllerFactory(prismaClient.company)

const getCompanyAndGoals = handlerBuilder(async (req, res) => {
    const idCompany = parseInt(req?.params?.idCompany) 

    if(!idCompany) throw new BusinessError("Id not informed")

    const data = await prismaClient.company.findMany({ where: {id: idCompany} })

    if(data.length === 0) throw new BusinessError("Id not exixts!")

    const results = await prismaClient.$queryRaw`select c.name as nameCompany, c.createdAt as createdAtCompany, 
    c.cnpj, g.id as idGoal,g.name as nameGoal, g.createdAt as createdAtGoal, g.updatedAt as updatedAtGoal
    from companies as c join goals as g on g.idCompany=c.id
    where c.id=${idCompany};`

    return res.status(200).send(results)
})

const companiesController = {
    ...crudFunctions,
    getCompanyAndGoals
}

module.exports = companiesController