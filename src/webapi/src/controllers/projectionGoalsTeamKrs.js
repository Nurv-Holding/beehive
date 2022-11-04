const { prismaClient } = require("../database/prismaClient")

const projectionGoalTeamKrsController = () => {
    const getByGoal = async (req, res) => {
        const {idCompany, idGoal} = req.params

        try {
            const goalKrs = await prismaClient.$queryRaw`select gt.id as idGoalTeam, gt.name as nameGoalTeam, gtk.id as idgoalTeamsKr, gtk.name as nameGoalsTeamKr,
            gtk.descriptions as descriptionsGoalsTeamKr, gtk.from as fromGoalsTeamKr, 
            gtk.to as toGoalsTeamKr, gtk.done as doneGoalsTeamKr, t.id as idTeam, t.name as nameTeam
            from processGoalsTeams as pgt join goalsTeams as gt on pgt.idGoalsTeam=gt.id
            join teams as t on pgt.idTeam=t.id 
            join goalTeamKrs as gtk on gtk.idGoalsTeam=gt.id where gtk.idCompany=${idCompany} and gt.idGoal=${idGoal};`
    
            res.status(200).send(goalKrs)
            
        } catch (error) {
            res.status(500).send(error)
        }

    }

    return {
        getByGoal
    }
}

module.exports = projectionGoalTeamKrsController