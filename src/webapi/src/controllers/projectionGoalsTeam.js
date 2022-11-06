const { prismaClient } = require("../database/prismaClient")

const projectionGoalsTeam = () => {

    const getByGoal = async (req, res) => {
        const {idCompany, idGoal} = req.params

        try {
            const goalTeams = await prismaClient.$queryRaw`select g.id as idGoal, g.name as nameGoal, gt.id as idGoalTeams, 
            gt.name as nameGoalTeams, gt.descriptions as goalTeamsDescriptions
            from goalsTeams as gt join goals as g on gt.idGoal=g.id 
            where gt.idCompany=${idCompany} and g.id=${idGoal}`
    
            res.status(200).send(goalTeams)
            
        } catch (error) {
            console.log(error)
            res.status(500).send([])
        }

    }

    return {
        getByGoal
    }
}

module.exports = projectionGoalsTeam