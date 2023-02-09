const crudControllerFactory = require("../common/crudControllerFactory");
const handlerBuilder = require("../common/handlerBuilder");
const { prismaClient } = require("../database/prismaClient");

const crudFunctions = crudControllerFactory(prismaClient.taskUser)

const getByUserAndKrs = async (req, res) => {
    const {idCompany, idGoal} = req.params

    try {
        const taskUsers = await prismaClient.$queryRaw`select u.id as idUser, u.name as nameUser, u.email as emailUser, p.name as profile,
        tk.id as idTask, tk.name as nameTask, tk.finalDate, tku.id as idTaskUser, tku.done, tu.id as idTeamUser,
        gtk.id as idGoalsTeamKr, gtk.name as nameGoalsTeamKr, gt.id as idGoalTeam, gt.name as nameGoalsTeam, tku.description,
        t.id as idTeam, t.name as nameTeam from taskUsers as tku join tasks as tk on tku.idTask=tk.id
        join goalTeamKrs as gtk on tk.idGoalsTeamKr=gtk.id join goalsTeams as gt on gtk.idGoalsTeam=gt.id
        left join teamUsers as tu on tku.idTeamUser=tu.id left join users as u on tu.idUser=u.id
        left join profiles as p on u.idProfile=p.id left join teams as t on tu.idTeam=t.id 
        where tku.idCompany=${idCompany} and gt.idGoal=${idGoal};`

        res.status(200).send(taskUsers)
        
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
        
    }
}

const getTasksUserByGoal = handlerBuilder(async (req, res) => {
    const {idCompany, idUser} = req.params

    const results = await prismaClient.$queryRaw`select tk.id as idTask, tk.name as nameTask,
    tku.done, tku.description, u.id as idUser, u.name as nameUser,
    t.id as idTeam, t.name as nameTeam, gt.idGoal,
    tku.createdAt, tku.updatedAt, tk.finalDate
    from taskusers as tku join tasks as tk on tku.idTask=tk.id
    join goalTeamKrs as gtk on tk.idGoalsTeamKr=gtk.id
    join goalsTeams as gt on gtk.idGoalsTeam=gt.id
    join teamusers as tu on tku.idTeamUser=tu.id
    join users as u on tu.idUser=u.id
    join teams as t on tu.idTeam=t.id
    join processgoalsteams as pgt on pgt.idTeam=t.id
    where pgt.idCompany=${idCompany} and u.id=${idUser};`

    res.status(200).send(results)
})

const taskUsersController = {
    ...crudFunctions,
    getByUserAndKrs,
    getTasksUserByGoal
}

module.exports = taskUsersController