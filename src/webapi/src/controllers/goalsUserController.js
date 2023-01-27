const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const goalsUserController = crudControllerFactory(prismaClient.goalsUser)

module.exports = goalsUserController