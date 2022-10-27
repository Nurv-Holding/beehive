const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const userController = crudControllerFactory(prismaClient.user)

module.exports = userController