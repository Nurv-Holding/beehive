const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const processTaskUsers = crudControllerFactory(prismaClient.processTaskUser)

module.exports = processTaskUsers