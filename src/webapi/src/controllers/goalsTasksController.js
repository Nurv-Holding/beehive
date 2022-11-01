const { prismaClient } = require("../database/prismaClient")

const goalsTasksController = () => {
    const getAll = async (req, res) => {
        const {idCompany} = req.params

        const results = await prismaClient.$queryRaw`select tk.id as idTask, tk.name as nameTask, 
        g.id as idGoal, g.name as nameGoal,u.id as idUser, 
        u.name as nameUser, tk.descriptions, tk.initialDate, 
        tk.finalDate, t.id as idTeam, t.name as nameTeam
        from tasks as tk join goals as g on tk.idGoal=g.id join teams as t on g.idTeam=t.id 
        join users as u on tk.idUser=u.id where tk.idCompany=${idCompany};`

        res.status(200).send(results)
    }

    const getByIdGoalUsers = async (req, res) => {
        const {idCompany, idGoal} = req.params

        const results = await prismaClient.$queryRaw`select tk.id as idTask, tk.name as nameTask, 
        g.id as idGoal, g.name as nameGoal,u.id as idUser, 
        u.name as nameUser, tk.descriptions, tk.initialDate, 
        tk.finalDate, t.id as idTeam, t.name as nameTeam
        from tasks as tk join goals as g on tk.idGoal=g.id join teams as t on g.idTeam=t.id 
        join users as u on tk.idUser=u.id where tk.idCompany=${idCompany} and g.id=${idGoal};`

        res.status(200).send(results)
    }

    const getByIdGoalByDone = async (req, res) => {
        const {idCompany, idGoal} = req.params

        const results = await prismaClient.$queryRaw`select tk.id as idTask, tk.name as nameTask, g.id as idGoal, g.name as nameGoal,u.id as idUser, tk.done as doneTask, 
        u.name as nameUser, tk.descriptions, tk.initialDate, tk.finalDate, t.id as idTeam, t.name as nameTeam
        from tasks as tk join goals as g on tk.idGoal=g.id join teams as t on g.idTeam=t.id 
        join users as u on tk.idUser=u.id where tk.idCompany=${idCompany} and g.id=${idGoal} and tk.done=true;`

        res.status(200).send(results)
    }

    const getByIdGoalByQuantifyTask = async (req, res) => {
        const {idCompany, idGoal} = req.params

        const results = await prismaClient.$queryRaw`select g.id as idGoal, g.name as nameGoal, count(*) as totalTask
        from tasks as tk join goals as g on tk.idGoal=g.id join teams as t on g.idTeam=t.id 
        join users as u on tk.idUser=u.id where tk.idCompany=${idCompany} and g.id=${idGoal};`

        const result = results.length !== 0? results[0]: null

        res.status(200).send({...result, totalTask:parseInt(result.totalTask)})
    }

    const getByIdGoalByQuantifyTaskDone = async (req, res) => {
        const {idCompany, idGoal} = req.params

        const results = await prismaClient.$queryRaw`select g.id as idGoal, g.name as nameGoal, 
        count(*) as totalTaskDone
        from tasks as tk join goals as g on tk.idGoal=g.id join teams as t on g.idTeam=t.id 
        join users as u on tk.idUser=u.id 
        where tk.idCompany=${idCompany} and g.id=${idGoal} and tk.done=true;`

        const result = results.length !== 0? results[0]: null

        res.status(200).send({...result, totalTaskDone:parseInt(result.totalTaskDone)})
    }

    return {
        getAll,
        getByIdGoalUsers,
        getByIdGoalByDone,
        getByIdGoalByQuantifyTask,
        getByIdGoalByQuantifyTaskDone
    }
}

module.exports = goalsTasksController