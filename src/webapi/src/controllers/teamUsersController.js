const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const teamUsersController = crudControllerFactory(prismaClient.teamUser)

module.exports = teamUsersController