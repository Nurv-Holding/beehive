const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const goalsController = crudControllerFactory(prismaClient.goal)

module.exports = goalsController