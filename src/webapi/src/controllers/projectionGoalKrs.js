const { prismaClient } = require("../database/prismaClient")

const projectionGoalKrsController = () => {
    const getByGoal = async (req, res) => {
        const {idCompany, idGoal} = req.params

        try {
            const goalKrs = await prismaClient.$queryRaw`select g.id as idGoal, g.name as nameGoal, gk.id as idgoalsKr, gk.name as nameGoalsKr,
            gk.descriptions as descriptionsGoalsKr, gk.from as fromGoalsKr, gk.to as toGoalsKr, gk.done as doneGoalsKr
            from goals as g left join goalKrs as gk on gk.idGoal=g.id where gk.idCompany=${idCompany} and g.id=${idGoal}`
    
            res.status(200).send(goalKrs)
            
        } catch (error) {
            res.status(500).send(error)
        }

    }

    return {
        getByGoal
    }
}

module.exports = projectionGoalKrsController