const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const processGoalTeamController = crudControllerFactory(prismaClient.processGoalsTeam)

module.exports = processGoalTeamController