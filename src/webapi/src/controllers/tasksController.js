const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const tasksController = crudControllerFactory(prismaClient.task)

module.exports = tasksController