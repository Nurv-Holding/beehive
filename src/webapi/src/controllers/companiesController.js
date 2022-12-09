const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const crudFunctions = crudControllerFactory(prismaClient.company)

const getCompanyAndGoals = async (req, res) => {
    const {idCompany} = req.params

    const results = await prismaClient.$queryRaw`select c.name as nameCompany, c.createdAt as createdAtCompany, 
    c.cnpj, g.id as idGoal,g.name as nameGoal, g.createdAt as createdAtGoal, g.updatedAt as updatedAtGoal
    from companies as c join goals as g on g.idCompany=c.id
    where c.id=${idCompany};`

    res.status(200).send(results)
}

const companiesController = {
    ...crudFunctions,
    getCompanyAndGoals
}

module.exports = companiesController