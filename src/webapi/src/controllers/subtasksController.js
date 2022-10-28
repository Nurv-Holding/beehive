const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const subtasksController = crudControllerFactory(prismaClient.subtask)

module.exports = subtasksController