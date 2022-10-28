const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const processGoalsTask = crudControllerFactory(prismaClient.processGoalsTask)

module.exports = processGoalsTask