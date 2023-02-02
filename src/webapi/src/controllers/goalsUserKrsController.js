const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const goalsUserKrsController = crudControllerFactory(prismaClient.goalsUserKr)


module.exports = goalsUserKrsController