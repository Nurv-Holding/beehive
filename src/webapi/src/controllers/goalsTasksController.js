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

    const getById = async (req, res) => {
        const {idCompany, idGoal} = req.params

        const results = await prismaClient.$queryRaw`select tk.id as idTask, tk.name as nameTask, 
        g.id as idGoal, g.name as nameGoal,u.id as idUser, 
        u.name as nameUser, tk.descriptions, tk.initialDate, 
        tk.finalDate, t.id as idTeam, t.name as nameTeam
        from tasks as tk join goals as g on tk.idGoal=g.id join teams as t on g.idTeam=t.id 
        join users as u on tk.idUser=u.id where tk.idCompany=${idCompany} and g.id=${idGoal};`

        res.status(200).send(results)
    }

    return {
        getAll,
        getById
    }
}

module.exports = goalsTasksController