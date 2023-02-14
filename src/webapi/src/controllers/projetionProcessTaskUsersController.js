const { prismaClient } = require("../database/prismaClient")

const projetionProcessTaskUsersController = () => {
    const getAll = async (req, res) => {
        const {idCompany} = req.params

        const results = await prismaClient.$queryRaw`select ptu.id as idProcess, tk.name as nameTask, tk.id as idTask, g.name as nameGoal, 
        g.id as idGoal, t.name as nameTeam, t.id as idTeam, u.id as idUser, u.name as nameUser,
        ptu.done, ptu.createdAt as initialDateProcess, ptu.updatedAt as finalDateProcess,
        tk.initialDate as initialDateTask,tk.finalDate as finalDateTask
        from processtaskUsers as ptu join tasks as tk on ptu.idTask=tk.id
        join teams as t on ptu.idTeam=t.id join users as u on ptu.idUser=u.id
        join processgoalstask as pgt on ptu.idProcessGoalsTask=pgt.id
        join goals as g on pgt.idGoal=g.id 
        where pgt.idCompany=${idCompany};`

        res.status(200).send(results)

    }

    const getById = async (req, res) => {
        const {idCompany, idGoal} = req.params

        const results = await prismaClient.$queryRaw`select pgt.id as idProcess, tk.name as nameTask, tk.id as idTask, g.name as nameGoal, 
        g.id as idGoal, t.name as nameTeam, t.id as idTeam,
         pgt.done, pgt.createdAt as initialDateProcess, pgt.updatedAt as finalDateProcess
        from processgoalstask as pgt join tasks as tk on pgt.idTask=tk.id
        join goals as g on pgt.idGoal=g.id join teams as t on pgt.idTeam=t.id 
        where pgt.idCompany=${idCompany} and g.id=${idGoal};`

        res.status(200).send(results)
    }

    return {
        getAll,
        getById
    }
}

module.exports = projetionProcessTaskUsersController