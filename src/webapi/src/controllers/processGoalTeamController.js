const crudControllerFactory = require("../common/crudControllerFactory");
const handlerBuilder = require("../common/handlerBuilder");
const { prismaClient } = require("../database/prismaClient");

const crudFunctions = crudControllerFactory(prismaClient.processGoalsTeam)

const getAllGoalGroupByTeam = handlerBuilder(async (req, res) => {
    const {idCompany} = req.params

    const results = await prismaClient.$queryRaw`select pgt.id as idProcess, g.id as idGoal, 
    g.name as nameGoal, gt.id as idGoalTeam, gt.name as nameGoalTeam,
    t.id as idTeam, t.name as nameTeam
    from processGoalsTeams as pgt left join goals as g on pgt.idGoal=g.id
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

const getAllTeams = handlerBuilder(async (req, res) => {
    const {idCompany} = req.params

    const results = await prismaClient.$queryRaw`select t.id as idTeam, t.name as nameTeam, t.leader, g.id as idGoal, g.name as nameGoal,
    gt.id as idGoalTeam, gt.name as nameGoalTeam, gtk.id as idKr, gtk.name as nameKr
    from goals as g join processGoalsTeams as pgt on pgt.idGoal=g.id
    join teams as t on pgt.idTeam=t.id
    left join goalsteams as gt on pgt.idGoalsTeam=gt.id
    left join goalteamkrs as gtk on gtk.idGoalsTeam=gt.id
    where pgt.idCompany=${idCompany};`

    res.status(200).send(results)
})

const getByTeams = handlerBuilder(async (req, res) => {
    const {idCompany} = req.params

    const results = await prismaClient.$queryRaw`select t.id as idTeam, t.name as nameTeam, t.leader, g.id as idGoal, g.name as nameGoal,
    gt.id as idGoalTeam, gt.name as nameGoalTeam, gtk.id as idKr, gtk.name as nameKr
    from goals as g join processGoalsTeams as pgt on pgt.idGoal=g.id
    join teams as t on pgt.idTeam=t.id
    left join goalsteams as gt on pgt.idGoalsTeam=gt.id
    left join goalteamkrs as gtk on gtk.idGoalsTeam=gt.id 
    where pgt.idCompany=${idCompany} group by t.id;`

    res.status(200).send(results)
})

const getAllTeamsByKrs = handlerBuilder(async (req, res) => {
    const {idCompany} = req.params

    const results = await prismaClient.$queryRaw`select t.id as idTeam, t.name as nameTeam, t.leader, g.id as idGoal, g.name as nameGoal,
    gt.id as idGoalTeam, gt.name as nameGoalTeam, gtk.id as idKr, gtk.name as nameKr
    from goals as g join processGoalsTeams as pgt on pgt.idGoal=g.id
    join teams as t on pgt.idTeam=t.id
    left join goalsteams as gt on pgt.idGoalsTeam=gt.id
    left join goalteamkrs as gtk on gtk.idGoalsTeam=gt.id
    where pgt.idCompany=${idCompany};`

    res.status(200).send(results)
})

const getTeamsAndUsersByGoal = handlerBuilder(async (req, res) => {
    const {idCompany, idUser, idGoal} = req.params

    const results = await prismaClient.$queryRaw`select g.id as idGoal, g.name as nameGoal,
    t.id as idTeam, t.name as nameTeam,
    u.id as idUser, u.name as nameUser 
    from processGoalsTeams as pgt 
    join goals as g on pgt.idGoal=g.id
    join teams as t on pgt.idTeam=t.id
    join teamUsers as tu on tu.idTeam=t.id
    join users as u on tu.idUser=u.id
    where pgt.idCompany=${idCompany} and u.id=${idUser} and g.id=${idGoal};`

    res.status(200).send(results)
})

const getTeamsAndUsersByUser = handlerBuilder(async (req, res) => {
    const {idCompany, idUser} = req.params

    const results = await prismaClient.$queryRaw`select g.id as idGoal, g.name as nameGoal,
    t.id as idTeam, t.name as nameTeam,
    u.id as idUser, u.name as nameUser 
    from processGoalsTeams as pgt 
    join goals as g on pgt.idGoal=g.id
    join teams as t on pgt.idTeam=t.id
    join teamUsers as tu on tu.idTeam=t.id
    join users as u on tu.idUser=u.id
    where pgt.idCompany=${idCompany} and u.id=${idUser};`

    res.status(200).send(results)
})

const getAllTeamsAndUsers = handlerBuilder(async (req, res) => {
    const {idCompany} = req.params

    const results = await prismaClient.$queryRaw`select g.id as idGoal, g.name as nameGoal,
    t.id as idTeam, t.name as nameTeam,
    u.id as idUser, u.name as nameUser 
    from processGoalsTeams as pgt 
    join goals as g on pgt.idGoal=g.id
    join teams as t on pgt.idTeam=t.id
    join teamUsers as tu on tu.idTeam=t.id
    join users as u on tu.idUser=u.id
    where pgt.idCompany=${idCompany};`

    res.status(200).send(results)
})

const processGoalTeamController = {
    ...crudFunctions,
    getAllGoalGroupByTeam,
    getAllGoalGroupByKrs,
    getAllTeams,
    getAllTeamsByKrs,
    getByTeams,
    getTeamsAndUsersByGoal,
    getTeamsAndUsersByUser,
    getAllTeamsAndUsers
}

module.exports = processGoalTeamController