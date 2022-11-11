const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const taskUsersController = crudControllerFactory(prismaClient.taskUser)

module.exports = taskUsersController