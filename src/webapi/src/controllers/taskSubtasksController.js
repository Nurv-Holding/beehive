const { prismaClient } = require("../database/prismaClient")

const taskSubtasksController = () => {

    const getById = async (req, res) => {
        const {idCompany, idTask} = req.params

        const results = await prismaClient.$queryRaw`select t.id as idTask, t.name as nameTask, 
        t.descriptions as descriptionsTask, t.done as doneTask,
        t.initialDate as initialDateTask, t.finalDate as finalDateTask, st.id as idSubtask, st.name as nameSubtask,
        st.descriptions as descriptionsSubtask, st.done as doneSubTask, st.initialDate as initialDateSubtask,
        st.updatedAt as finalDateSubtask,u.id as idUser, u.name as nameUser, u.photo as userPhoto
        from subtasks as st join tasks as t on st.idTask=t.id
        join users as u on t.idUser=u.id where t.idCompany=${idCompany} and t.id=${idTask};`

        res.status(200).send(results)
    }

    return {
        getById
    }
}

module.exports = taskSubtasksController