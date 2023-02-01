const crudControllerFactory = require("../common/crudControllerFactory");
const handlerBuilder = require("../common/handlerBuilder");
const { prismaClient } = require("../database/prismaClient");

const crudFunctions = crudControllerFactory(prismaClient.goalsUser)

const getAllKrsByUser = handlerBuilder(async (req, res) => {
    const {idCompany, idUser} = req.params

    const results = await prismaClient.$queryRaw`select g.id as idGoal, g.name as nameGoal, 
    u.id as idUser,u.name as nameUser, t.id as idTeam, t.name as nameTeam, 
    guk.id as idKr, guk.name as nameKr, guk.toQuarterly,
    guk.fromQuarterly, guk.toYearly, guk.fromYearly,guk.done, guk.status 
    from goalsuserskrs as guk
    join goalsusers as gu on guk.idGoalsUser=gu.id
    join users as u on gu.idUser=u.id
    join goals as g on gu.idGoal=g.id
    join teams as t on gu.idTeam=t.id
    where guk.idCompany=${idCompany} and guk.idUser=${idUser};`

    res.status(200).send(results)
})

const goalsUserController = {
    ...crudFunctions,
    getAllKrsByUser
}

module.exports = goalsUserController