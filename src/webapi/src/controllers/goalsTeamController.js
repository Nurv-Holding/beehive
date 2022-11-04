const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const goalsTemaController = crudControllerFactory(prismaClient.goalsTeam)

module.exports = goalsTemaController