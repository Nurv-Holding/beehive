const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const crudFuntion = crudControllerFactory(prismaClient.historyGoalsTeamKr)

const progectionHistoryGoalTeamKrByKr = async (req, res) => {

    const {idCompany, idGoal, idTeam} = req.params

    const results = await prismaClient.$queryRaw`select gtk.id as idGoalsTeamKr, gtk.name as nameGoalsTeamKr, gtk.updatedAt as updateGoalTeamKr,
    gt.id as idGoalTeam, gt.name as nameGoalTeam, pgt.id as idProcessGoalsTeam, 
    hgtk.id as idHistoryGoalTeamsKr, t.id as idTeam,t.name as nameTeam, hgtk.to, hgtk.from, 
    hgtk.quaPercentage as quaPercentageHistory, hgtk.yeaPercentage as yeaPercentageHistory, hgtk.user, 
    gtk.status, gtk.fromQuarterly, gtk.fromYearly
    from historyGoalsTeamKrs as hgtk join goalTeamKrs as gtk on hgtk.idGoalsTeamKr=gtk.id
    join processGoalsTeams as pgt on hgtk.idProcessGoalTeam=pgt.id
    join teams as t on pgt.idTeam=t.id
    join goalsTeams as gt on pgt.idGoalsTeam=gt.id 
    where hgtk.idCompany=${idCompany} and gt.idGoal=${idGoal} and pgt.idTeam=${idTeam};`

    res.status(200).send(results)
}

const historyGoalsTeamKrsController = {
    ...crudFuntion,
    progectionHistoryGoalTeamKrByKr
}

module.exports = historyGoalsTeamKrsController