const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const crudFunctios = crudControllerFactory(prismaClient.teamUser)

const getAllTeamsAndUsers = async (req, res) => {
    const {idCompany} = req.params

    try {
        const goalTeamsKrs = await prismaClient.$queryRaw`select tu.id as idTeamUser, u.id as idUser, u.name as nameUser, u.occupation as occupationUser,
        u.email as emailUser, u.photo as photoUser, p.name as profile, t.id as idTeam, t.name as nameTeam
        from teamUsers as tu join users as u on tu.idUser=u.id
        join profiles as p on u.idProfile=p.id
        join teams as t on tu.idTeam=t.id where tu.idCompany=${idCompany};`

        res.status(200).send(goalTeamsKrs)
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

const teamUsersController = {
    ...crudFunctios,
    getAllTeamsAndUsers
}

module.exports = teamUsersController