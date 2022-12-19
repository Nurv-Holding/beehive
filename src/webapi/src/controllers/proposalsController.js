const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const proposalsController = crudControllerFactory(prismaClient.proposal)

module.exports = proposalsController