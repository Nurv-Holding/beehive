const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const principlesController = crudControllerFactory(prismaClient.principle)

module.exports = principlesController