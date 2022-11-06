const { prismaClient } = require("../database/prismaClient")

const projectionGoalTeamKrsController = () => {
    const getByGoal = async (req, res) => {
        const {idCompany, idGoal} = req.params

        try {
            const goalTeamsKrs = await prismaClient.$queryRaw`select gt.id as idGoalTeam, gt.name as nameGoalTeam, gtk.id as idgoalTeamsKr, gtk.name as nameGoalsTeamKr,
            gtk.descriptions as descriptionsGoalsTeamKr, gtk.quarterly as quarterlyGoalsTeamKr, 
            gtk.yearly as yearlyGoalsTeamKr, gtk.done as doneGoalsTeamKr, t.id as idTeam, t.name as nameTeam
            from processGoalsTeams as pgt left join goalsTeams as gt on pgt.idGoalsTeam=gt.id
            left join goals as g on pgt.idGoal=g.id join teams as t on pgt.idTeam=t.id 
            left join goalTeamKrs as gtk on gtk.idGoalsTeam=gt.id 
            where pgt.idCompany=${idCompany} and g.id=${idGoal} group by gtk.id;`
    
            res.status(200).send(goalTeamsKrs)
            
        } catch (error) {
            res.status(500).send(error)
        }

    }

    return {
        getByGoal
    }
}

module.exports = projectionGoalTeamKrsController