const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const crudFuntion = crudControllerFactory(prismaClient.historyGoalsTeamKr)

const progectionHistoryGoalTeamKrByKr = async (req, res) => {
    const {idGoalsTeam, idGoalsTeamKr} = req.params

    const results = await prismaClient.$queryRaw`select gtk.id as idGoalsTeamKr, 
    gtk.name as nameGoalsTeamKr, gtk.updatedAt as updateGoalTeamKr, 
    gt.id as idGoalTeam, gt.name as nameGoalTeam, pgt.id as idProcessGoalsTeam, hgtk.id as idHistoryGoalTeamsKr,
    hgtk.quaPercentage as quaPercentageHistory, hgtk.yeaPercentage as yeaPercentageHistory
    from historyGoalsTeamKrs as hgtk join goalTeamKrs as gtk on hgtk.idGoalsTeamKr=gtk.id
    join processGoalsTeams as pgt on hgtk.idProcessGoalTeam=pgt.id
    join goalsTeams as gt on pgt.idGoalsTeam=gt.id where gt.id=${idGoalsTeam} and hgtk.idGoalsTeamKr=${idGoalsTeamKr};`

    res.status(200).send(results)
}

const historyGoalsTeamKrsController = {
    ...crudFuntion,
    progectionHistoryGoalTeamKrByKr
}

module.exports = historyGoalsTeamKrsController