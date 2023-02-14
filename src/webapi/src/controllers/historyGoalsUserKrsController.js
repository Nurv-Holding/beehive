const crudControllerFactory = require("../common/crudControllerFactory");
const handlerBuilder = require("../common/handlerBuilder");
const { prismaClient } = require("../database/prismaClient");

const crudFunction = crudControllerFactory(prismaClient.historyGoalsUserKr)

const getHistoryKrsUsersByGoal = handlerBuilder(async (req, res) => {
    const {idCompany, idGoalsUserKr} = req.params

    const results = await prismaClient.$queryRaw`select hgk.id as idHistoryGoalKrs, hgk.idGoalsUserKr, 
    hgk.updatedAt as updateHistory,hgk.createdAt as createdHistory,hgk.note,
    hgk.quaPercentage, hgk.yeaPercentage, gk.name as nameGoalKr, hgk.to, hgk.from, hgk.status
    from historyGoalsUserKrs as hgk
    join goalsUsersKrs as gk on hgk.idGoalsUserKr=gk.id 
    where hgk.idCompany=${idCompany}  and hgk.idGoalsUserKr=${idGoalsUserKr};`

    res.status(200).send(results)
})

const historyGoalsUserKrsController = {
    ...crudFunction,
    getHistoryKrsUsersByGoal
}

module.exports = historyGoalsUserKrsController