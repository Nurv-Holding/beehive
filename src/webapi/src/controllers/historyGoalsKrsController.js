const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const crudFunction = crudControllerFactory(prismaClient.historyGoalKr)

const progectionHistoryGoalKrByKr = async (req, res) => {
    const {idCompany, idGoal, idGoalsKr} = req.params

    try {
        const historyGoalKrs = await prismaClient.$queryRaw`select hgk.id as idHistoryGoalKrs, hgk.idGoal, hgk.idGoalKr, 
        hgk.updatedAt as updateHistory,hgk.createdAt as createdHistory,hgk.note,
        hgk.quaPercentage, hgk.yeaPercentage, gk.name as nameGoalKr, hgk.to, hgk.from, hgk.status, hgk.user
        from historyGoalKrs as hgk join goals as g on hgk.idGoal=g.id
        join goalKrs as gk on hgk.idGoalKr=gk.id 
        where hgk.idCompany=${idCompany} 
        and hgk.idGoal=${idGoal} and hgk.idGoalKr=${idGoalsKr};`

        res.status(200).send(historyGoalKrs)
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

const historyGoalsKrsController = {
    ...crudFunction,
    progectionHistoryGoalKrByKr
}

module.exports = historyGoalsKrsController