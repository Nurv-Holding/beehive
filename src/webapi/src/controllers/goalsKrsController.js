const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const goalsKrsController = crudControllerFactory(prismaClient.goalKr)

module.exports = goalsKrsController