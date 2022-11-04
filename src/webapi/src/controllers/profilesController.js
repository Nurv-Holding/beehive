const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const profilesController = crudControllerFactory(prismaClient.profile)

module.exports = profilesController