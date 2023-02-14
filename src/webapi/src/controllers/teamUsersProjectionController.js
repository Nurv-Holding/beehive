const { prismaClient } = require("../database/prismaClient")


const teamUsersProjectionController = () => {
    const getAll = async (req, res) => {
        const results = await prismaClient.$queryRaw`select tu.id as idTeamUser, u.id as idUser, u.name as nameUser, t.id as idTeam, t.name as nameTeam
        from teamUsers as tu join teams as t on tu.idTeam=t.id
        join users as u on tu.idUser=u.id where tu.idCompany=1;`

        res.status(200).send(results)
    }

    const getById = async (req, res) => {
        const {idTeam, idCompany} = req.params

        const results = await prismaClient.$queryRaw`select tu.id as idTeamUser, u.id as idUser, u.name as nameUser, t.id as idTeam, t.name as nameTeam
        from teamUsers as tu join teams as t on tu.idTeam=t.id
        join users as u on tu.idUser=u.id where tu.idCompany=${idCompany} and t.id=${idTeam};`

        res.status(200).send(results)
    }

    return {
        getAll,
        getById
    }
    
}

module.exports = teamUsersProjectionController