const crudControllerFactory = require("../common/crudControllerFactory");
const handlerBuilder = require("../common/handlerBuilder");
const { prismaClient } = require("../database/prismaClient");

const crudFunctions = crudControllerFactory(prismaClient.processGoalsTeam)

const getAllGoalGroupByTeam = handlerBuilder(async (req, res) => {
    const {idCompany} = req.params

    const results = await prismaClient.$queryRaw`select pgt.id as idProcess, g.id as idGoal, 
    g.name as nameGoal, gt.id as idGoalTeam, gt.name as nameGoalTeam,
    t.id as idTeam, t.name as nameTeam
    from processGoalsTeams as pgt join goals as g on pgt.idGoal=g.id
    left join teams as t on pgt.idTeam=t.id
    left join goalsTeams as gt on pgt.idGoalsTeam=gt.id
    where pgt.idCompany=${idCompany};`

    res.status(200).send(results)
})

const getAllGoalGroupByKrs = handlerBuilder(async (req, res) => {
    const {idCompany} = req.params

    const results = await prismaClient.$queryRaw`select pgt.id as idProcess, g.id as idGoal, 
    g.name as nameGoal, gt.id as idGoalTeam, gt.name as nameGoalTeam,
    t.id as idTeam, t.name as nameTeam, gtk.id as idGoalTeamKrs, gtk.name as nameGoalTeamKrs
    from processGoalsTeams as pgt join goals as g on pgt.idGoal=g.id
    left join teams as t on pgt.idTeam=t.id
    left join goalsTeams as gt on pgt.idGoalsTeam=gt.id
    left join goalTeamKrs as gtk on gtk.idGoalsTeam=gt.id
    where pgt.idCompany=${idCompany};`

    res.status(200).send(results)
})

const getAllTeamsByGoals = handlerBuilder(async (req, res) => {
    const {idCompany} = req.params

    const results = await prismaClient.$queryRaw`select t.id as idTeam, t.name as nameTeam, t.leader, g.id as idGoal, g.name as nameGoal
    from goals as g join processgoalsteams as pgt on pgt.idGoal=g.id
    join teams as t on pgt.idTeam=t.id
    left join goalsteams as gt on pgt.idGoalsTeam=gt.id
    left join goalteamkrs as gtk on gtk.idGoalsTeam=gt.id
    where pgt.idCompany=${idCompany};`

    res.status(200).send(results)
})

const processGoalTeamController = {
    ...crudFunctions,
    getAllGoalGroupByTeam,
    getAllGoalGroupByKrs,
    getAllTeamsByGoals
}

module.exports = processGoalTeamController