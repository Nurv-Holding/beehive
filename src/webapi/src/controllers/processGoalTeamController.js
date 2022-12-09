const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const crudFunctions = crudControllerFactory(prismaClient.processGoalsTeam)

const getAllGoalGroupByTeam = async (req, res) => {
    const {idCompany} = req.params

    const results = await prismaClient.$queryRaw`select g.id as idGoal, g.name as nameGoal, gt.id as idGoalTeam, gt.name as nameGoalTeam,
    t.id as idTeam, t.name as nameTeam, gtk.id as idGoalTeamKr, gtk.name as nameGoalTeamKr
    from processGoalsTeams as pgt join goals as g on pgt.idGoal=g.id
    join teams as t on pgt.idTeam=t.id
    join goalsTeams as gt on pgt.idGoalsTeam=gt.id
    join goalTeamKrs as gtk on gtk.idGoalsTeam=gt.id
    where pgt.idCompany=${idCompany} group by t.id;`

    res.status(200).send(results)
}

const processGoalTeamController = {
    ...crudFunctions,
    getAllGoalGroupByTeam
}

module.exports = processGoalTeamController