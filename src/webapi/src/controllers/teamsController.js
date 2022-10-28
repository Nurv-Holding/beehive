const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const teamsController = crudControllerFactory(prismaClient.team)

module.exports = teamsController