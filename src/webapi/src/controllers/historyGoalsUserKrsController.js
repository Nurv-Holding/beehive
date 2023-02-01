const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const historyGoalsUserKrsController = crudControllerFactory(prismaClient.historyGoalsUserKr)

module.exports = historyGoalsUserKrsController