const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const goalsTemaKrsController = crudControllerFactory(prismaClient.goalTeamKr)

module.exports = goalsTemaKrsController