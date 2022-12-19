const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const futureVisionsController = crudControllerFactory(prismaClient.futureVision)

module.exports = futureVisionsController