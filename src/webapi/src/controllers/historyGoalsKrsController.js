const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const historyGoalsKrsController = crudControllerFactory(prismaClient.historyGoalKr)

module.exports = historyGoalsKrsController