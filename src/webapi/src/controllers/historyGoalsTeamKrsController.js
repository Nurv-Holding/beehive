const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const historyGoalsTeamKrsController = crudControllerFactory(prismaClient.historyGoalsTeamKr)

module.exports = historyGoalsTeamKrsController